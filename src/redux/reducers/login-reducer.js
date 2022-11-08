/* eslint-disable */
import { USER_LOGIN, LOGIN_LOADING, LOGOUT } from "../actions/login-action";

const initialState ={
  loading: false,
  success: false,
  snackBarMessage: false,
  error: '',
  user: {}
};

export const loginReducer = (state = initialState, action) =>{
  // console.log(action)
  switch (action.type) {
    case USER_LOGIN:
      if(action.error){
        return {
          ...state,
          loading: false,
          success: false,
          snackBarMessage: true,
          error: action.error,
        };
    }
      return {
        ...state,
        loading: false,
        success: true,
        error: "",
        user: action.user
    };
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        snackBarMessage: false,
    };
    case LOGOUT:
      return {
        ...state,
        success: false,
      }
    default:
      return state;
  }
}
