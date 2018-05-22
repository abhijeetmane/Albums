import React, { Component } from "react";
import { View, Text, StyleSheet, AsyncStorage, Platform } from "react-native";
import { connect } from "react-redux";
import { getPhotos } from "../store/actions/";
import PhotosList from "../components/common/List";
import startApp from "../components/StartApp";
import Icon from "react-native-vector-icons/Ionicons";

class Photos extends Component {
  static navigatorStyle = {
    navBarButtonColor: "#fff",
    // iOS only
    statusBarTextColorSchemeSingleScreen: "light",
    navBarLeftButtonColor: "#fff",
    statusBarColor: "#fff"
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
    const albumId = this.props.selectedAlbum.id;
    this.props.onLoadPhotos(albumId);
  }
  itemSelectedHandler = key => {
    const albumTitle = this.props.selectedAlbum.title;
    const selectedPhoto = this.props.photos.find(photo => {
      return photo.id === key;
    });
    this.props.navigator.showLightBox({
      screen: "Albums.PhotoDetails",
      title: "Details",
      passProps: { selectedPhoto: selectedPhoto, albumTitle: albumTitle },
      style: {
        backgroundBlur: "light",
        backgroundColor: "#ff000010",
        tapBackgroundToDismiss: true
      },
      adjustSoftInput: "resize"
    });
  };
  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <PhotosList
          items={this.props.photos}
          onItemSelected={this.itemSelectedHandler}
          type="photos"
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
    photos: state.photos.photos
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoadPhotos: albumId => dispatch(getPhotos(albumId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
