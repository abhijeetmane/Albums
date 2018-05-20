import { SET_PHOTOS } from "../actions/actionType";

const initialState = {
  photos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTOS:
      return {
        ...state,
        photos: action.photos
      };
      break;
    default:
      return state;
  }
};

export default reducer;
