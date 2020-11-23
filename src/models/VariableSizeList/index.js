import ListBase from "../ListBase";
import throttle from "utils/throttle";

import {
    ROWS_QUANTITY,
    WIDGET_SCROLL_HEIGHT,
    ROWS_CONTAINER_NODE,
    CACHED_ROWS_HEIGHT,
} from "constants/events";

/*
    TODO:
        when estimatedRowHeight is not correct, scroll behavior is weird here
        maybe MutationObserver is not needed?
        perform resetCacheHeights from useEffect on rowRenderer change
*/

class VariableSizeList extends ListBase {
    
    rowHeights = [];
    fTree = [];

    /*
        most significant bit of this.rowsQuantity;
        caching it to avoid Math.clz32 calculations on every getIndex call
    */
    msb = 0;
    
    constructor(){
        super();

        this
            /* must be done before events, attached in ListBase */
            .prependListener( this.grow, ROWS_QUANTITY )
            .on( this.updateDomObserver, ROWS_CONTAINER_NODE );
            
        this.rowsDomObserver = new MutationObserver( this.updateRowHeightsThrottled );
    }

    destructor(){
        this.rowsDomObserver.disconnect();
        this.updateRowHeightsThrottled.cancel();
        super.destructor();
    }

    grow(){
        const { rowsQuantity } = this;

        const curRowHeighsLength = this.rowHeights.length;

        this.msb = 1 << 31 - Math.clz32( rowsQuantity );

        if( rowsQuantity > curRowHeighsLength ){

            const oldRowHeights = this.rowHeights;
            
            this.rowHeights = new Uint32Array( rowsQuantity );
            this.fTree = new Uint32Array( rowsQuantity + 1 );

            if( curRowHeighsLength ){
                /* heights cache is not empty */
                this.rowHeights.set( oldRowHeights );
                this.rowHeights.fill( this.estimatedRowHeight, curRowHeighsLength );


                /* 
                    Creating fenwick tree from an array in linear time;
                    It is much more efficient, than calling updateRowHeight N times.
                */

                this.fTree.set( this.rowHeights, 1 );

                for( let i = 1, j; i <= rowsQuantity; i++ ){
                    j = i + ( i & -i );
                    if( j <= rowsQuantity ){
                        this.fTree[ j ] += this.fTree[ i ];
                    }
                }

                /*
                    TODO:
                        normally CACHED_ROWS_HEIGHT event must be emitted here; 
                        but now this would lead to calling of updateWidgetScrollHeight twice.
                */
            }
            else {
                this.resetCachedHeights();
            }
        }        
    }

    resetCachedHeights( rowHeight = this.estimatedRowHeight ){
        this.rowHeights.fill( rowHeight );

        /* Filling FenwickTee with single value  */
        for ( let i = 1; i <= this.rowsQuantity; i++ ){
            this.fTree[ i ] = rowHeight * ( i & -i );
        }

        this.emit( CACHED_ROWS_HEIGHT );
    }

    updateDomObserver(){
        this.rowsDomObserver.disconnect();
        if( this.rowsContainerNode ){
            this.rowsDomObserver.observe( this.rowsContainerNode, { childList: true, subtree: true });
        }
    }

    getIndex( offset ){
        let index = 0;
        
        for( let bitMask = this.msb, tempIndex; bitMask; bitMask >>= 1 ){
            tempIndex = index + bitMask;
            if( tempIndex > this.rowsQuantity ){
                continue;
            }
            if( offset === this.fTree[ tempIndex ] ){
                return tempIndex;
            }
            if( offset > this.fTree[ tempIndex ] ) {
                index = tempIndex;
                offset -= this.fTree[ index ];
            }
        }

        return index;
    }

    getOffset( index ){
        let result = 0;
        for ( ; index > 0; index -= index & -index ){
            result += this.fTree[ index ];
        }
        return result;
    }

    updateRowHeight( i, delta ){
        for ( i++; i <= this.rowsQuantity; i += i & -i ){
            this.fTree[ i ] += delta;
        }
    }

    updateRowHeights(){
        const node = this.rowsContainerNode;

        if( node ){

            let index = this.startIndex,
                diff,
                cacheChanged = false;

            for( let child of node.children ){
     
                diff = child.offsetHeight - this.rowHeights[ index ];

                if( diff ){
                    this.rowHeights[ index ] += diff;
                    this.updateRowHeight( index, diff );
                    
                    if( !cacheChanged ){
                        cacheChanged = true;
                    }
                }
                
                index++;
            }

            if( cacheChanged ){
                this.emit( CACHED_ROWS_HEIGHT );
            }
        }
    }

    updateRowHeightsThrottled = throttle( this.updateRowHeights, 200, this );
}

export default VariableSizeList;