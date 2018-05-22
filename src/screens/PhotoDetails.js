import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Capitalize from "../utility/Capitalize";
class PhotoDetails extends Component {
  render() {
    const { title, url } = this.props.selectedPhoto;
    const itemTitle = Capitalize(title);
    const albumName = "FROM\n" + Capitalize(this.props.albumTitle);
    const {
      flexContainer,
      container,
      imageStyle,
      titleStyle,
      albumTitle
    } = styles;
    return (
      <View style={flexContainer}>
        <View style={container}>
          <Image style={imageStyle} source={{ uri: url }} />
          <Text style={titleStyle}>{itemTitle}</Text>
          <Text style={albumTitle}>{albumName}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    padding: 16,
    justifyContent: "center",
    width: Math.max(Dimensions.get("window").width * 0.7, 320),
    minHeight: 120
  },
  imageStyle: {
    height: 250
  },
  titleStyle: {
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 15,
    fontStyle: "italic",
    color: "#1A4B71",
    fontWeight: "bold"
  },
  albumTitle: {
    textAlign: "center",
    fontSize: 12,
    color: "#051E39"
  }
});
export default PhotoDetails;
