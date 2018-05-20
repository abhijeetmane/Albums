import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import { AsyncStorage } from "react-native";
import startApp from "../components/StartApp";
import AlbumsList from "../components/common/List";
import { connect } from "react-redux";
import { getAlbums } from "../store/actions/";

class Albums extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: "#0B365B",
    navBarTextColor: "#fff",
    navBarTextFontSize: 22,
    // iOS only
    statusBarTextColorSchemeSingleScreen: "light",
    //Android only
    navigationBarColor: "#0B365B",
    statusBarColor: "#fff",
    navBarTitleTextCentered: true
  };
  itemSelectedHandler = key => {
    const selectedAlbum = this.props.albums.find(album => {
      return album.id === key;
    });
  };
  componentDidMount() {
    this.props.onLoadAlbums();
  }
  logOutHandler = () => {
    AsyncStorage.removeItem("auth:userId");
    startApp();
  };
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
