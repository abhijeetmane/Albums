import { SET_ALBUMS } from "../actions/actionType";

const initialState = {
  albums: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUMS:
      return {
        ...state,
        albums: action.albums
      };
      break;
    default:
      return state;
  }
};

export default reducer;
