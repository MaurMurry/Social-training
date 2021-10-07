import React from "react";
import Users from "./Users";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.getUsers();
    this.props.getUsersLenght();
  }

  getUsers() {
    let amountUsersLoading =
      this.props.counterLoadingUsers * this.props.amountLoadUsers;
    this.props.getUsers(amountUsersLoading);
  }

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <div>
            <img src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif" />
          </div>
        ) : null}
        <Users
          getUsers={this.getUsers.bind(this)}
          users={this.props.users}
          followFetching={this.props.followFetching}
          acceptingUnfollowed={this.props.acceptingUnfollowed}
          acceptingFollowed={this.props.acceptingFollowed}
        />
        ;
      </>
    );
  }
}

export default UsersAPIComponent;
