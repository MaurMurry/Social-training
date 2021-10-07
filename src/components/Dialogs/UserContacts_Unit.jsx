import { NavLink } from "react-router-dom";
import style from "./css moduls/UserContacts.module.css";

const UserContactsUnit = (props) => {
  let user = `dialogs/${props.dataUnit.name}`;
  return (
    <NavLink to={user} className={style.user}>
      <img src={props.dataUnit.avatar} alt={"avatar" + props.dataUnit.name} />
      <div>{props.dataUnit.name}</div>
    </NavLink>
  );
};
export default UserContactsUnit;
