import style from "./css moduls/Profile.module.css";

const ProfileHeader = (props) => {
  return !props.state ? (
    <div></div>
  ) : (
    <img
      className={style.hadProfile}
      src={props.state.header}
      alt="had profile"
    />
  );
};

export default ProfileHeader;
