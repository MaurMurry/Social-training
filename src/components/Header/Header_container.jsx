import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData, toggleIsFetching } from "../../redux/authReducer";
import { loggedAPI } from "../../API/Api";
import { logout } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    console.warn("Fix CSS");
    loggedAPI.setAuthData().then((data) => {
      if (data.resultCode === 0 && data.data.id !== null) {
        this.props.setAuthUserData({ ...data, isAuth: true });
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  login: state.authReducer.login,
  isAuth: state.authReducer.isAuth,
});
export default connect(mapStateToProps, {
  setAuthUserData,
  toggleIsFetching,
  logout,
})(HeaderContainer);
