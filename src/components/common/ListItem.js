import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import Capitalize from "../../utility/Capitalize";
import AlbumItem from "../AlbumItem";
import PhotoItem from "../PhotoItem";
class listItem extends Component {
  render() {
    const { title } = this.props.item;
    const itemTitle = Capitalize(title);

    const {
      listItem,
      textContainerStyle,
      thumbnailImageStyle,
      imageStyle,
      thumbnailContainerStyle,
      titleTextStyle
    } = styles;
    if (this.props.type === "album") {
      return (
        <TouchableOpacity onPress={this.props.onItemPressed}>
          <View style={listItem}>
            <AlbumItem title={itemTitle} />
          </View>
        </TouchableOpacity>
      );
    }
    if (this.props.type === "photos") {
      return (
        <TouchableOpacity onPress={this.props.onItemPressed}>
          <View style={listItem}>
            <PhotoItem item={this.props.item} />
          </View>
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
