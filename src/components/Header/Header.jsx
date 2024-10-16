import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import clsx from "clsx";

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const Header = () => {
  return (
    <header>
      <NavLink className={buildCssClasses} to="/">
        Homepage with Pub
      </NavLink>
      <NavLink className={buildCssClasses} to="/users">
        Users
      </NavLink>
      <NavLink className={buildCssClasses} to="/products" end>
        Products
      </NavLink>
    </header>
  );
};

export default Header;
