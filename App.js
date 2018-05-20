import { Navigation } from "react-native-navigation";
import startApp from "./src/components/StartApp";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import Login from "./src/screens/Login";
import Albums from "./src/screens/Albums";

const store = configureStore();
Navigation.registerComponent("Albums.Login", () => Login, store, Provider);
Navigation.registerComponent("Albums.Albums", () => Albums, store, Provider);
startApp();
