import { REQUEST_SIGNUP, REQUEST_SUCCESS, REQUEST_ERROR, CLOSE_SNACKBAR} from '../actions/signup-action'

const initialState = {
  loading: false,
  success: false,
  successMessage: '',
  errorOpen: false,
  error: '',
}

export function registerReducer(state = initialState, action){
  switch(action.type){
    case REQUEST_SIGNUP:
      return {
        ...state,
        loading: true,
      }
    case REQUEST_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        succesMessage: action.payload
      }
    case REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        errorOpen: true,
        error: action.error
      }
    case CLOSE_SNACKBAR:
        return {
            ...state,
            errorOpen: false,
            error: ''
        }
    default:
      return state
  } 
 
}