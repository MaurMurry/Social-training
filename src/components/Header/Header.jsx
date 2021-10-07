import { NavLink } from "react-router-dom";
import style from "./css moduls/Header.module.css";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/512px-LEGO_logo.svg.png"
        alt="logo for site"
      />
      <div className={style.loginBlock}>
        <NavLink to={"/login"}>{props.login}</NavLink>
        {props.isAuth ? <button onClick={props.logout}>Logout</button> : ""}
      </div>
    </header>
  );
};
export default Header;
