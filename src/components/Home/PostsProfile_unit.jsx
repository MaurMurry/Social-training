import style from "./css moduls/PostsProfile.module.css";

const PostsUnit = (props) => {
  return (
    <div id={props.dataUnit.id} className={style.wrapper}>
      <img
        className={style.avatar}
        src={props.dataUnit.photoURL}
        alt="avatar"
      />
      <div className={style.wrapper_text}>
        <p>
          {props.dataUnit.name} {props.dataUnit.surname}
        </p>
        <p>{props.dataUnit.text}</p>
      </div>
    </div>
  );
};
export default PostsUnit;
