import UserMessangesUnit from "./UserMessages_Unit";
import style from "./css moduls/UserMessages.module.css";

const outputMessages = (obj) => {
  return obj.map((messagesItem) => (
    <UserMessangesUnit
      dataUnit={messagesItem}
    />  
  ));
};

const UserMessages = (props) => {
  return (
    <div className={style.UserMessage}>{outputMessages(props.userChat)}</div>
  );
};

export default UserMessages;
