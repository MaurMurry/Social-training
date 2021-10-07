import { connect } from "react-redux";
import { addPost } from "../../redux/profileReducer.js";
import PostInput from "./PostInput.jsx";

let mapStateToProps = (state) => ({});

const PostInputContainer = connect(mapStateToProps, {
  addPost,
})(PostInput);

export default PostInputContainer;
