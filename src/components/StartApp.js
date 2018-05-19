import { Navigation } from "react-native-navigation";
import { AsyncStorage } from "react-native";

const startApp = () => {
  AsyncStorage.getItem("auth:userId").then(item => {
    if (item) {
      Navigation.startSingleScreenApp({
        screen: {
          screen: "Albums.Albums",
          title: "Albums"
        }
      });
    } else {
      Navigation.startSingleScreenApp({
        screen: {
          screen: "Albums.Login",
          title: "Login"
        }
      });
    }
  });
};

export default startApp;
