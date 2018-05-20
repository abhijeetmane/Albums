import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { getPhotos } from "../store/actions/";
import PhotosList from "../components/common/List";

class Photos extends Component {
  static navigatorStyle = {
    navBarButtonColor: "#fff",
    // iOS only
    statusBarTextColorSchemeSingleScreen: "light",
    navBarLeftButtonColor: "#fff",
    statusBarColor: "#fff"
  };
  componentDidMount() {
    const albumId = this.props.selectedAlbum.id;
    this.props.onLoadPhotos(albumId);
  }
  itemSelectedHandler = () => {
    // this.props.navigator.showLightBox({
    //   screen: "Albums.PhotoDetails",
    //   title: "Details",
    //   style: {
    //     backgroundBlur: "light",
    //     backgroundColor: "#ff000010",
    //     tapBackgroundToDismiss: true
    //   },
    //   adjustSoftInput: "resize"
    // });
  };
  render() {
    return (
      <View style={styles.container}>
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
