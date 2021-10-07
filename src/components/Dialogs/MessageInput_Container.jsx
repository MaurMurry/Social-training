import { connect } from "react-redux";
import { onClickSendMessage } from "../../redux/dialogsReducer.js";
import SendMessage from "./MessageInput.jsx";

let mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
});

const SendMessageContainer = connect(mapStateToProps, {
  onClickSendMessage,
})(SendMessage);

export default SendMessageContainer;
