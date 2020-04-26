// Action Types
import { SAVE_RECIPES } from 'src/actions/recipes';

// Initial State
// state.recipes....
const initialState = {
  loading: true,
  list: [],
};

// Reducer
const recipesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        list: action.recipes,
        loading: false,
      };
    default:
      return state;
  }
};

export default recipesReducer;
