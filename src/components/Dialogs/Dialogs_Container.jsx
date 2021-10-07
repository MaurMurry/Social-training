import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { onClickSendMessage } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

class DialogContainer extends React.Component {
  render() {
    return <Dialogs {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  state: state.dialogsReducer,
});

export default compose(
  connect(mapStateToProps, {
    onClickSendMessage,
  }),
  //withAuthRedirect
)(DialogContainer);
