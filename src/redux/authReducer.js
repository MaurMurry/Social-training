import { stopSubmit } from "redux-form";
import { loggedAPI } from "../API/Api";

const ALL_ACTION = {
  TOGGLE_IS_FETCHING: "TOGGLE-IS-FETCHING",
  SET_USER_DATA: "SET-USER-DATA",
  REMOVE_USER_DATA: "REMOVE-USER-DATA",
};

let authData = {
  userId: 1,
  email: null,
  login: "not logged",
  isAuth: false,
  isFetching: false,
};

const authReducer = (data = authData, action) => {
  switch (action.type) {
    case ALL_ACTION.TOGGLE_IS_FETCHING:
      return {
        ...data,
        isFetching: action.isFetching,
      };
    case ALL_ACTION.SET_USER_DATA:
      if (action.data.resultCode != 0) {
        return { data };
      }
      return {
        ...action.data.data,
        isAuth: action.data.isAuth,
        isFetching: false,
      };

    default:
      return data;
  }
};

export const toggleIsFetching = (isFetching) => ({
  type: ALL_ACTION.TOGGLE_IS_FETCHING,
  isFetching: isFetching,
});

export const setAuthUserData = (dataLogged, auth) => ({
  type: ALL_ACTION.SET_USER_DATA,
  data: dataLogged,
  isAuth: auth,
});

export const login = (login, password, rememberMe) => (dispatch) => {
  dispatch(stopSubmit("login", { _error: "Login or password is wrong" }));
  loggedAPI.login(login, password, rememberMe).then((res) => {
    dispatch(setAuthUserData({ ...res, isAuth: true }));
  });
};

export const logout = () => (dispatch) => {
  loggedAPI.logout().then((res) => {
    console.log("Reducer logout");
    dispatch(setAuthUserData({ ...res, isAuth: false }));
  });
};

export default authReducer;
