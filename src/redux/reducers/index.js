/* eslint-disable */
import { combineReducers } from "redux";
// import { transferReducer, verifyOTPReducer } from './transferReducer'
import { loginReducer } from "./login-reducer";
// import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  // money_transfer: transferReducer,
  // otp_verify: verifyOTPReducer,
  login: loginReducer,
  // register: registerReducer,
});

export default reducers;
