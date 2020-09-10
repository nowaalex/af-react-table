import { computed, autorun } from "mobx";
import ScrollableRowsBase from "./ScrollableRowsBase";

class FixedSizeScrollableRows extends ScrollableRowsBase {

    constructor( RowsConstructor ){
        super( RowsConstructor );

        this.dispose = autorun(() => {
            if( this.widgetWidth ){
                const node = this.rowsContainerNode;
    
                if( node ){
                    const { firstElementChild } = node;
                    if( firstElementChild ){
                        this.estimatedRowHeightCalculated = firstElementChild.offsetHeight;
                    }
                }
            }
        }, { delay: 200 });
    }

    desctructor(){
        this.dispose();
        super.destructor();
    }

    @computed get widgetScrollHeight(){
        return this.estimatedRowHeightFinal * this.Rows.visibleRowCount;
    }

    getVisibleRangeStart( distance ){
        const { estimatedRowHeightFinal } = this;
        return estimatedRowHeightFinal ? [ distance / estimatedRowHeightFinal | 0, distance % estimatedRowHeightFinal ] : [ 0, 0 ];
    }

    getDistanceBetweenIndexes( startIndex, endIndex ){
        return this.estimatedRowHeightFinal * ( endIndex - startIndex );
    }
};

export default FixedSizeScrollableRows;