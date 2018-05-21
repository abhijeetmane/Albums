import { SET_USER } from "./actionType";
import { startLoadingIndicator, stopLoadingIndicator } from "./index";
import { HOST_URL } from "../../utility/Constants";
import { AsyncStorage } from "react-native";
import startApp from "../../components/StartApp";

export const saveAuth = authData => {
  return dispatch => {
    dispatch(authSignIn(authData));
  };
};

export const setUser = userData => {
  return {
    type: SET_USER,
    user: userData
  };
};

export const authSignIn = authData => {
  let url = HOST_URL + "users?email=" + authData.email.value;
  return dispatch => {
    dispatch(startLoadingIndicator());
    fetch(url)
      .then(res => res.json())
      .then(parsedRes => {
        dispatch(stopLoadingIndicator());
        if (!parsedRes.length > 0) {
          alert("Invalid Credentials!");
        } else {
          const userData = parsedRes[0];
          AsyncStorage.setItem("auth:userId", JSON.stringify(userData.id));
          dispatch(setUser(userData));
          startApp();
        }
      })
      .catch(err => {
        dispatch(stopLoadingIndicator());
        alert("Ooops! Something went wrong 😟.Please Try Again");
      });
  };
};
