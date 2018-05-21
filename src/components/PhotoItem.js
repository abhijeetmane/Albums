import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const PhotoItem = props => {
  const {
    photoView,
    textContainerStyle,
    thumbnailImageStyle,
    imageStyle,
    thumbnailContainerStyle,
    titleTextStyle
  } = styles;
  return (
    <View style={photoView}>
      <View style={thumbnailContainerStyle}>
        <Image
          style={thumbnailImageStyle}
          source={{ uri: props.item.thumbnailUrl }}
        />
      </View>
      <Text style={titleTextStyle}>{props.item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  photoView: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    padding: 5,
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "relative"
  },
  titleTextStyle: {
    flex: 1,
    flexWrap: "wrap",
    fontSize: 15
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailImageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25
  }
});

export default PhotoItem;
