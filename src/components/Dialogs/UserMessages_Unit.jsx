import style from "./css moduls/UserMessages.module.css";

const UserMessagesUnit = (props) => {
  let chat = props.dataUnit.other ? "message" : "message_other";
  return (
    <div className={`${style[chat]}  ${style.all_message}`}>
      <div>{props.dataUnit.message}</div>
    </div>
  );
};

export default UserMessagesUnit;
