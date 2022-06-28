import { combineReducers } from "@reduxjs/toolkit";
import users from "./users/reducer";

const rootReducer = combineReducers({
  users,
});

export default rootReducer;
