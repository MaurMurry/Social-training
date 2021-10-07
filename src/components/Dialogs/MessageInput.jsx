import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../FormsControle/FormsControle";
import { maxLenghtCreater, required } from "../../Utils/Validators/validator";
import style from "./css moduls/UserMessages.module.css";

const maxLenght100 = maxLenghtCreater(100);

const SendMessage = (props) => {
  const addNewMessage = (value) => {
    props.onClickSendMessage(value.newMessageInput);
  };
  return (
    <div className={style.send_message}>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageInput = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        validate={[required,maxLenght100]}
        component={Textarea}
        name={"newMessageInput"}
        placeholder="Enter your message..."
      />
      <button>Send</button>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialog" })(AddMessageInput);

export default SendMessage;
