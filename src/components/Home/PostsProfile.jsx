import PostsProfileUnit from "./PostsProfile_unit.jsx";
import style from "./css moduls/PostsProfile.module.css";

const outputPosts = (obj) => {
  return obj.map((dataPostsItem) => (
    <PostsProfileUnit
      dataUnit={dataPostsItem}
    />
  ));
};

const PostsProfile = (props) => {
  return <div className={style.wallPosts}>{outputPosts(props.dataPosts)}</div>;
};

export default PostsProfile;
