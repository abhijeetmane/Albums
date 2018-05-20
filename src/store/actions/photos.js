import { SET_PHOTOS } from "./actionType";
import { HOST_URL } from "../../utility/Constants";
export const getPhotos = albumId => {
  return dispatch => {
    const url = HOST_URL + "photos?albumId=" + albumId;
    fetch(url)
      .then(res => res.json())
      .then(parsedRes => {
        dispatch(setPhotos(parsedRes));
      })
      .catch(err => {
        console.log(err);
        alert("Ooops! something went wrong😞");
      });
  };
};

export const setPhotos = photos => {
  return {
    type: SET_PHOTOS,
    photos: photos
  };
};
