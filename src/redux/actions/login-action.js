import Axios from "./axios-config";

export const USER_LOGIN = "LOGIN";
export const LOGIN_LOADING = "LOADING";
export const CLOSE_SNACKBAR = "CLOSE_SNACKBAR";
export const LOGOUT = "LOGOUT";

export const loginAction = (userCredentials) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  return Axios.post(`/login`, userCredentials)
    .then((res) => {
      localStorage.setItem("KW_AT", res.data.token);
      dispatch({
        type: USER_LOGIN,
        user: res.data.user,
      });
    })
    .catch((err) => {
      if (err.message === "Network Error") {
        dispatch({
          type: USER_LOGIN,
          error: err.message,
        });
      }
      if (err.response) {
        dispatch({
          type: USER_LOGIN,
          error: err.response.data.error,
        });
      }
    });
};

export const logoutAction = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
