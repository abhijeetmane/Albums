import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../UI/ListItem";

const List = props => {
  console.log("Inside List", props.items);
  return (
    <FlatList
      style={styles.listContainer}
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