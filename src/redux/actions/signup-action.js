import Axios from "./axios-config"

export const REQUEST_SIGNUP = 'REQUEST_SIGNUP'
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
export const REQUEST_ERROR = 'REQUEST_ERROR'
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR'


export const registerAction = (user) => async dispatch => {
  dispatch({
    type: REQUEST_SIGNUP
  })
  return Axios.post( `/register`, user)
    .then(res => {
      localStorage.setItem("KW_AT", res.data.token);
      localStorage.setItem("user", res.data.user.email)
      dispatch({
        type: REQUEST_SUCCESS,
        payload: res.data
      })
    //   nextStep()
      }
    )
    .catch(err => {
        if (err.response){
            dispatch({
                type: REQUEST_ERROR,
                error: err.response.data.error,
              })
          }else if(err.request){
            dispatch({
                type: REQUEST_ERROR,
                error: err.request.data.error,
              })
          }else if(err.message){
            dispatch({
                type: REQUEST_ERROR,
                error: err.message.data,
              })     
          }
    })
}
export const closeSnackbar = () => dispatch =>{
  dispatch({
      type: CLOSE_SNACKBAR
  });
}