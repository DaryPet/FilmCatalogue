import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

export default function Navigation() {
  return (
    <nav className={css.list}>
      <NavLink
        to="/"
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies/"
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
      >
        Movie
      </NavLink>
    </nav>
  );
}
