import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../common/ListItem";

const List = props => {
  const { listContainer } = styles;
  return (
    <FlatList
      style={listContainer}
      data={props.items}
      renderItem={info => (
        <ListItem
          type={props.type}
          item={info.item}
          key={info.item.id}
          onItemPressed={() => props.onItemSelected(info.item.id)}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default List;
