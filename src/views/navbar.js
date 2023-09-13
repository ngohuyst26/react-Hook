import "../views/css/Nav.scss";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink  exact to="/">Data API</NavLink>
            <NavLink  to="/timer">CountDown</NavLink>
            <NavLink  to="/todos">Todos</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/youtube-search">Search Youtube</NavLink>
        </div>
    );
};

export default Nav;