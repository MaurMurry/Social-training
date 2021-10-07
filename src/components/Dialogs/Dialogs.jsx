import style from "./css moduls/Dialogs.module.css";
import UserContacts from "./UserContacts";
import UserMessages from "./UserMessages";
import SendMessageContainer from "./MessageInput_Container";

const Dialogs = (props) => {
  return (
    <div className={style.dialog}>
      <UserContacts contactsUser={props.state.contactsUser} />
      <UserMessages userChat={props.state.userChat} />
      <SendMessageContainer />
    </div>
  );
};

export default Dialogs;
