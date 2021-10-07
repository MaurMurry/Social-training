import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  setUserProfile,
  updateStatus,
  setStatus,
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { usersAPI } from "../../API/Api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    usersAPI
      .renderUserInProfile(this.props.match.params.userID)
      .then((data) => {
        this.props.setUserProfile(data);
      });
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        updateStatus={this.props.updateStatus}
        setStatus={this.props.setStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
});

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    updateStatus,
    setStatus,
  }),
  withRouter
)(ProfileContainer);
