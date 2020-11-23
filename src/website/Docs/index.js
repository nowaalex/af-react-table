import { useParams } from "react-router-dom";
import List from "./List";
import Table from "./Table";
import css from "./style.module.scss";

const Pages = {
    list: List,
    table: Table
}

const Docs = () => {

    const { docPage } = useParams();
    const Component = Pages[ docPage ];
    
    return (
        <div className={css.wrapper}>
            {Component ? <Component /> : "Doc page not found"}
        </div>
    )
}

export default Docs;