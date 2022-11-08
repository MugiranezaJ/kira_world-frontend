import {USER, USER_ERROR, USER_LOADING } from '../actions/user.action';

const initialState ={
    loading: false,
    user: {},
    error: null,
}

export const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                loading: true
            }
        case USER:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case USER_ERROR:
          return {
            ...state,
            loading: false,
            error: action.error
          }
        default:
            return state;
    }

}