import profileReducer from "./profileReducer";
import dialogReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
  profileReducer: profileReducer,
  dialogsReducer: dialogReducer,
  usersReducer: usersReducer,
  authReducer: authReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;
