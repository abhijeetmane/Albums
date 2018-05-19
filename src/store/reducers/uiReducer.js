import {
  START_LOADING_INDICATOR,
  STOP_LOADING_INDICATOR
} from "../actions/actionType";

const initialState = {
  isLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING_INDICATOR:
      return {
        ...state,
        isLoading: true
      };
      break;

    case STOP_LOADING_INDICATOR:
      return {
        //response: action.payload,
        isLoading: false
      };
      break;
    default:
      return state;
  }
};

export default reducer;
