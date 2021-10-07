import style from "./css moduls/Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav className={style.nav}>
      <div className={style.nav_list}>
        <NavLink to="/profile" activeClassName={style.active}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/dialogs" activeClassName={style.active}>
          <li>Message</li>
        </NavLink>
        <NavLink to="/users" activeClassName={style.active}>
          <li>Users</li>
        </NavLink>
        <NavLink to="/contact" activeClassName={style.active}>
          <li>Contact</li>
        </NavLink>
        <NavLink to="/musics" activeClassName={style.active}>
          <li>Musics</li>
        </NavLink>
        <NavLink to="/settings" activeClassName={style.active}>
          <li>Settings</li>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
