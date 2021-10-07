import { usersAPI, followAPI } from "../API/Api";

const ALL_ACTION = {
  FOLLOW: "FOLLOW",
  UNFOLLOW: "UNFOLLOW",
  SET_USERS: "SET-USERS",
  SET_MAX_AMOUNT_USERS: "SET-MAX-AMOUNT-USERS",
  LOAD_UP_USERS: "LOAD-UP-USERS",
  TOGGLE_IS_FETCHING: "TOGGLE-IS-FETCHING",
  TOGGLE_IS_FOLLOW: "TOGGLE-IS-FOLLOW",
};

let usersData = {
  users: [],
  maxAmountUsers: 0,
  amountLoadUsers: 4,
  counterLoadingUsers: 1,
  isFetching: false,
  followFetching: false,
};

const usersReducer = (data = usersData, action) => {
  switch (action.type) {
    case ALL_ACTION.FOLLOW:
      return {
        ...data,
        users: data.users.map((u) =>
          u.id === action.id ? { ...u, followed: true } : u
        ),
      };

    case ALL_ACTION.UNFOLLOW:
      return {
        ...data,
        users: data.users.map((u) =>
          u.id === action.id ? { ...u, followed: false } : u
        ),
      };

    case ALL_ACTION.SET_USERS:
      return { ...data, users: [...action.users] };

    case ALL_ACTION.SET_MAX_AMOUNT_USERS:
      return {
        ...data,
        maxAmountUsers: action.maxAmountUsers,
      };
    case ALL_ACTION.LOAD_UP_USERS:
      if (
        data.maxAmountUsers / data.amountLoadUsers ===
        data.counterLoadingUsers
      ) {
        return data;
      }
      return {
        ...data,
        counterLoadingUsers: data.counterLoadingUsers + 1,
      };
    case ALL_ACTION.TOGGLE_IS_FETCHING:
      return {
        ...data,
        isFetching: action.isFetching,
      };
    case ALL_ACTION.TOGGLE_IS_FOLLOW:
      return {
        ...data,
        followFetching: action.follow,
      };

    default:
      return data;
  }
};

export const follow = (userID) => ({ type: ALL_ACTION.FOLLOW, id: userID });
export const unfollow = (userID) => ({
  type: ALL_ACTION.UNFOLLOW,
  id: userID,
});
export const setUsersAC = (users) => ({
  type: ALL_ACTION.SET_USERS,
  users: users,
});
export const setUsersMA = (maxUsers) => ({
  type: ALL_ACTION.SET_MAX_AMOUNT_USERS,
  maxAmountUsers: maxUsers,
});
export const loadUpUsers = () => ({
  type: ALL_ACTION.LOAD_UP_USERS,
});
export const toggleIsFetching = (isFetching) => ({
  type: ALL_ACTION.TOGGLE_IS_FETCHING,
  isFetching: isFetching,
});
export const toggleIsFollow = (isFetching) => ({
  type: ALL_ACTION.TOGGLE_IS_FOLLOW,
  follow: isFetching,
});

export const getUsers = (amount) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(amount).then((data) => {
      dispatch(setUsersAC(data));
      dispatch(toggleIsFetching(false));
      dispatch(loadUpUsers());
    });
  };
};

export const getUsersLenght = () => {
  return (dispatch) => {
    usersAPI.getUsersLenght().then((data) => {
      dispatch(setUsersMA(data[0].amountUsers));
    });
  };
};

export const acceptingUnfollowed = (id) => {
  return (dispatch) => {
    dispatch(toggleIsFollow(true));
    followAPI.removeFollow(id).then(() => {
      dispatch(unfollow(id));
      followAPI.updateFollow(id, false);
      dispatch(toggleIsFollow(false));
    });
  };
};

export const acceptingFollowed = (id) => {
  return (dispatch) => {
    dispatch(toggleIsFollow(true));
    followAPI.addFollow(id).then((data) => {
      dispatch(follow(id));
      followAPI.updateFollow(id, true);
      dispatch(toggleIsFollow(false));
    });
  };
};

export default usersReducer;
