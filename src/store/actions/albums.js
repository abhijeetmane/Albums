import { SET_ALBUMS } from "./actionType";
import { HOST_URL } from "../../utility/Constants";
import { AsyncStorage } from "react-native";
export const getAlbums = () => {
  return (dispatch, getState) => {
    AsyncStorage.getItem("auth:userId").then(id => {
      if (id) {
        let url = HOST_URL + "albums?userId=" + id;
        fetch(url)
          .then(res => res.json())
          .then(parsedRes => {
            dispatch(setAlbums(parsedRes));
          })
          .catch(err => {
            console.log(err);
            alert("Ooops! something went wrong😞.Please Try Again!");
          });
      }
    });
  };
};

export const setAlbums = album => {
  return {
    type: SET_ALBUMS,
    albums: album
  };
};
