import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/authReducer";
import uiReducer from "./reducers/uiReducer";
import albumsReducer from "./reducers/albumsReducer";
import photosReducer from "./reducers/photosReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  albums: albumsReducer,
  photos: photosReducer
});

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
