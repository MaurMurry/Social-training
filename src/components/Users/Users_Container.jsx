import UsersAPIComponent from "./UsersAPIComponent";
import { connect } from "react-redux";
import {
  acceptingUnfollowed,
  acceptingFollowed,
  getUsers,
  getUsersLenght,
} from "../../redux/usersReducer.js";
import { compose } from "redux";
import { getAllUsers,maxAmountUsers ,counterAddingUserPage ,nowLoadUsers ,isFetching ,followFetching} from "../../redux/usersSelector";

let mapStateToProps = (state) => {
  return {
    users: getAllUsers(state),
    maxAmountUsers: maxAmountUsers(state),
    counterLoadingUsers: counterAddingUserPage(state),
    amountLoadUsers: nowLoadUsers(state),
    isFetching: isFetching(state),
    followFetching: followFetching(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    getUsers,
    getUsersLenght,
    acceptingUnfollowed,
    acceptingFollowed,
  })
)(UsersAPIComponent);
