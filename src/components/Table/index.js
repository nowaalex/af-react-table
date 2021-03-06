import { memo, useState } from "react";
import PropTypes from "prop-types";

import commonDefaultProps from "../common/defaultProps";

import cx from "utils/cx";

import Context from "Context";
import useModel from "hooks/useModel";

import VariableHeightsStore from "models/VariableSizeList";
import FixedHeightsStore from "models/FixedSizeList";

import ScrollContainer from "../common/ScrollContainer";
import ExtraHeight from "../common/ExtraHeight";

import Scroller from "./Scroller";
import Rows from "./Rows";
import Colgroup from "./Colgroup";

import {
    renderRow,
    Row,
    renderHeaderCells,
    Cell
} from "./renderers";

import css from "./style.module.scss";

/*
    Todo:
        * think about border-collapse offsetHeight issue ( maybe throw border-collapse )
*/

const Table = ({
    fixed,
    estimatedRowHeight,
    columns,
    getRowData,
    getRowProps,
    renderRow,
    Row,
    renderHeaderCells,
    renderTfootContent,
    Cell,
    rowsQuantity,
    overscanRowsCount,
    headless,
    dataRef,
    className,
    onRangeEndMove,
    ...props
}) => {

    const [ rowsContainerNode, rowsContainerRef ] = useState();

    const Store = useModel(
        fixed ? FixedHeightsStore : VariableHeightsStore,
        dataRef,
        estimatedRowHeight,
        overscanRowsCount,
        rowsQuantity,
        rowsContainerNode,
        onRangeEndMove
    );
        
    return (
        <Context.Provider value={Store}>
            <ScrollContainer className={cx(css.wrapper,className)} {...props}>
                <table className={css.bodyTable}>
                    <Colgroup columns={columns} />
                    {headless ? null : (
                        <ExtraHeight>
                            <thead>
                                <tr>
                                    {renderHeaderCells(columns)}
                                </tr>
                            </thead>
                        </ExtraHeight>
                    )}
                    <Scroller />
                    <tbody ref={rowsContainerRef}>
                        <Rows
                            columns={columns}
                            getRowData={getRowData}
                            getRowProps={getRowProps}
                            Row={Row}
                            renderRow={renderRow}
                            Cell={Cell}
                        />
                    </tbody>
                    {renderTfootContent ? (
                        <ExtraHeight>
                            <tfoot>
                                {renderTfootContent( columns )}
                            </tfoot>
                        </ExtraHeight>
                    ) : null}
                </table>
            </ScrollContainer>
        </Context.Provider>
    );
}

Table.propTypes = {
    rowsQuantity: PropTypes.number.isRequired,
    className: PropTypes.string,
    fixed: PropTypes.bool,
    overscanRowsCount: PropTypes.number,
    estimatedRowHeight: PropTypes.number,
    onRangeEndMove: PropTypes.func,
    columns: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
                PropTypes.shape({
                // unique key for column
                dataKey: PropTypes.string.isRequired,

                // for details see CellComponent implementation
                format: PropTypes.func,
                render: PropTypes.func,
                formatTotal: PropTypes.func,
                totals: PropTypes.string,

                // column props, affecting colgroup > col tags
                background: PropTypes.string,
                border: PropTypes.string,
                width: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
                
                // works pretty shitty in col tag
                minWidth: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
                CellComponent: PropTypes.elementType,
                getCellExtraProps: PropTypes.func
            })
        ])
    ).isRequired,

    getRowData: PropTypes.func.isRequired,
    getRowProps: PropTypes.func,
    renderTfootContent: PropTypes.func,
    renderHeaderCells: PropTypes.func,
    Row: PropTypes.elementType,
    Cell: PropTypes.elementType,

    headless: PropTypes.bool,
};

/*
    Spread operator will kill pure annotation comment, and tree-shaking will fail.
    So Object.assign is a must
*/
Table.defaultProps = /*#__PURE__*/ Object.assign({}, commonDefaultProps, {
    headless: false,

    renderRow,
    Row,
    renderHeaderCells,
    Cell
});

export default memo( Table );