import { CHANGE_FIELD } from 'src/actions/auth';

// Action Types

// Initial State
// state.auth....
const initialState = {
  email: '',
  password: '',
  isLogged: false,
};

// Reducer
const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default authReducer;
