import { Navigation } from "react-native-navigation";
import Login from "./src/screens/Login";

Navigation.registerComponent("Albums.Login", () => Login);
Navigation.startSingleScreenApp({
  screen: {
    screen: "Albums.Login",
    title: "Login"
  }
});
