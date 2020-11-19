import { NavLink } from "react-router-dom";
import { VscGithub } from "react-icons/vsc";
import { ImNpm } from "react-icons/im";
import css from "./style.module.scss";

const Menu = ({ items }) => (
    <div className={css.wrapper}>
        <h2 className={css.header}>Examples</h2>
        <nav>
            {items.map( item => (
                <NavLink activeClassName={css.activeLink} className={css.link} to={item} key={item}>
                    {item}
                </NavLink>
            ))}
        </nav>

        <h2 className={css.header}>Docs</h2>
        <nav>
            <NavLink activeClassName={css.activeLink} className={css.link} to="/docs/commonPropTypes">
                Common PropTypes
            </NavLink>
        </nav>
    
        <h2 className={css.header}>Links</h2>

        
        <a href="https://github.com/nowaalex/af-virtual-scroll" target="_blank" className={css.link}>
            <VscGithub />
            Github
        </a>
        <a href="https://www.npmjs.com/package/af-virtual-scroll" target="_blank" className={css.link}>
            <ImNpm />
            Npm
        </a>
    </div>
);

export default Menu