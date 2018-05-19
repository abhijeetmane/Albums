import React from "react";
import { StyleSheet, Text } from "react-native";

const HeadingText = props => (
  <Text {...props} style={[styles.heading, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#051E39"
  }
});

export default HeadingText;
