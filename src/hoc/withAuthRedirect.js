import React from "react";
import { Redirect } from "react-router-dom";

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      return !this.props.store.getState().authReducer.isAuth ? (
        <Redirect to={"/login"} />
      ) : (
        <Component {...this.props} />
      );
    }
  }

  return RedirectComponent;
};
