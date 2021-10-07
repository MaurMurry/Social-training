import style from "./css moduls/PostsProfile.module.css";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLenghtCreater, required } from "../../Utils/Validators/validator";
import { Textarea } from "../../FormsControle/FormsControle";

const maxLenght300 = maxLenghtCreater(10);

const PostInput = (props) => {
  const addPost = (values) => {
    props.addPost(values.newPostInput);
  };

  return (
    <div className={style.post_input}>
      <AddPostFormRedux onSubmit={addPost} />
    </div>
  );
};

const PostInputForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        validate={[required,maxLenght300]}
        component={Textarea}
        name={"newPostInput"}
        placeholder={"Enter your message..."}
      />
      <button>Create post</button>
    </form>
  );
};

const AddPostFormRedux = reduxForm({ form: "posts" })(PostInputForm);

export default PostInput;
