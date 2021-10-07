import style from "./css moduls/InfoLoggedUser.module.css";

const InfoUserUnit = (props) => {
  return (
    <div className={style.wrapper_persone}>
      <img className={style.avatar} src={props.data.photoURL} alt="avatar" />
      <div className="container__text">
        <div
          className={style.userName}
        >{`${props.data.name} ${props.data.surname}`}</div>
        <div className={style.information}>
          Age: {props.data.age} old years, Education: {props.data.education},
          Status: {props.data.status}
        </div>
        <div className={style.position}>{props.data.position}</div>
      </div>
    </div>
  );
};

export default InfoUserUnit;
