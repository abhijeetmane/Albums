import { START_LOADING_INDICATOR, STOP_LOADING_INDICATOR } from "./actionType";

export const startLoadingIndicator = () => {
  return {
    type: START_LOADING_INDICATOR
  };
};
export const stopLoadingIndicator = () => {
  return {
    type: STOP_LOADING_INDICATOR
  };
};
