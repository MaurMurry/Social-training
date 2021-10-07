import UserContactsUnit from "./UserContacts_Unit";
import style from "./css moduls/UserContacts.module.css";

const outputContacts = (obj) => {
  return obj.map((contact) => (
    <UserContactsUnit dataUnit={contact}/>
  ));
};

const UserContacts = (props) => {
  return (
    <div className={style.UserContacts}>
      {outputContacts(props.contactsUser)}
    </div>
  );
};

export default UserContacts;
