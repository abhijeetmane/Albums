import { Navigation } from "react-native-navigation";
import startApp from "./src/components/StartApp";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import Login from "./src/screens/Login";
import Albums from "./src/screens/Albums";
import Photos from "./src/screens/Photos";
import PhotoDetails from "./src/screens/PhotoDetails";

const store = configureStore();
Navigation.registerComponent("Albums.Login", () => Login, store, Provider);
Navigation.registerComponent("Albums.Albums", () => Albums, store, Provider);
Navigation.registerComponent("Albums.Photos", () => Photos, store, Provider);
Navigation.registerComponent("Albums.PhotoDetails", () => PhotoDetails);
startApp();
