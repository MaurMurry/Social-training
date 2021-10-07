import InfoUserUnit from "./infoLoggedUser_unit";
import style from "./css moduls/Profile.module.css";
import ProfileStatusHook from "./ProfileStatusHook.jsx";

const InfoUser = (props) => {
  if (!props.dataForUser) {
    return <div>ЖДИЖДИ</div>;
  }
  return (
    <div className={style.profile}>
      <InfoUserUnit data={props.dataForUser} />
      <ProfileStatusHook
        updateStatus={props.updateStatus}
        user={props.dataForUser}
        setStatus={props.setStatus}
      />
    </div>
  );
};

export default InfoUser;
