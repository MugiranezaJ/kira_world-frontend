import Axios from './axios-config'
import axios from 'axios';
export const USER = 'USER';
export const USER_LOADING = 'USER_LOADING';
export const USER_ERROR = 'USER_ERROR';

export const userAction = email => async (dispatch) => {

    dispatch({
       type: USER_LOADING 
      });

    // const token = localStorage.getItem('KW_AT');

    return Axios.get('/user', {params: {email}})
    .then((res) => {
        dispatch({
            type: USER,
            payload: res.data
        })
    })
    .catch(err=>{
        if(err.message === 'Network Error'){
            dispatch({
                type: USER_ERROR,
                error: err.message
            })
        }
        if(err.response){
            dispatch({
                type: USER_ERROR,
                error: err.response.data.error
            })
        }
    });
}
