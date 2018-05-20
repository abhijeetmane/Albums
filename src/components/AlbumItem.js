import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const AlbumItem = props => {
  return (
    <View style={styles.albumView}>
      <Text style={styles.albumTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  albumView: {
    height: 150,
    backgroundColor: "#B8CCDE",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    padding: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  albumTitle: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default AlbumItem;
