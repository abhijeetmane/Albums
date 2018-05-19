import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

class listItem extends Component {
  render() {
    if (this.props.type === "album") {
      return (
        <TouchableOpacity onPress={this.props.onItemPressed}>
          <View style={styles.listItem} />
        </TouchableOpacity>
      );
    }

    if (this.props.type === "photos") {
      return (
        <TouchableOpacity onPress={this.props.onItemPressed}>
          <View style={styles.listItem} />
        </TouchableOpacity>
      );
    }
    return <View />;
  }
}
const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: "#ddd",
    borderRadius: 2,
    shadowColor: "#0B365B",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 3,
    shadowOpacity: 0.2,
    elevation: 3,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});

export default listItem;
