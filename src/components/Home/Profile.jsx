import style from "./css moduls/Profile.module.css";
import ProfileHeader from "./ProfileHeader";
import InfoUser from "./infoLoggedUser";
import PostsProfile from "./PostsProfile.jsx";
import PostInputContainer from "./PostInput_Container";

const Profile = (props) => {
  const state = props.store.getState().profileReducer;
  return (
    <div className={style.content}>
      <ProfileHeader state={state.profile} />
      <InfoUser
        setStatus={props.setStatus}
        updateStatus={props.updateStatus}
        dataForUser={state.profile}
      />
      <PostInputContainer />
      <PostsProfile dataPosts={state.dataPosts} />
    </div>
  );
};

export default Profile;
