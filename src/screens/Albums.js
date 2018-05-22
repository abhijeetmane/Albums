import React, { Component } from "react";
import { StyleSheet, View, Button, AsyncStorage, Platform } from "react-native";
import startApp from "../components/StartApp";
import AlbumsList from "../components/common/List";
import { connect } from "react-redux";
import { getAlbums } from "../store/actions/";
import Icon from "react-native-vector-icons/Ionicons";

class Albums extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: "#0B365B",
    navBarTextColor: "#fff",
    navBarTextFontSize: 22,
    navBarButtonColor: "#fff",
    // iOS only
    statusBarTextColorSchemeSingleScreen: "light",
    navBarRightButtonColor: "#fff",
    //Android only
    navigationBarColor: "#0B365B",
    statusBarColor: "#fff",
    navBarTitleTextCentered: true
  };
  itemSelectedHandler = key => {
    const selectedAlbum = this.props.albums.find(album => {
      return album.id === key;
    });
    this.props.navigator.push({
      screen: "Albums.Photos",
      title: "Photos",
      passProps: {
        selectedAlbum: selectedAlbum
      },
      animated: true,
      navigatorButtons: {
        tintColor: "#fff"
      }
    });
  };
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }
  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "logout") {
        AsyncStorage.removeItem("auth:userId");
        startApp();
      }
    }
  };
  componentDidMount() {
    const icon = Icon.getImageSource(
      Platform.OS === "android" ? "md-log-out" : "ios-log-out",
      30
    ).then(icon => {
      this.props.navigator.setButtons({
        rightButtons: [{ id: "logout", icon: icon }]
      });
    });
    this.props.onLoadAlbums();
  }

  render() {
    return (
      <View style={styles.container}>
        <AlbumsList
          items={this.props.albums}
          onItemSelected={this.itemSelectedHandler}
          type="album"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
const mapStateToProps = state => {
  return {
    albums: state.albums.albums
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoadAlbums: () => dispatch(getAlbums())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
