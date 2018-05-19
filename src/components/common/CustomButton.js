import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

const CustomButton = props => {
  const content = (
    <View
      style={[
        styles.button,
        { backgroundColor: props.color },
        props.disabled ? styles.disabled : null
      ]}
    >
      <Text
        style={[styles.buttonText, props.disabled ? styles.disabledText : null]}
      >
        {props.children}
      </Text>
    </View>
  );
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
      {content}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 5,
    borderColor: "#ddd",
    borderRadius: 5,
    borderWidth: 1,
    width: 80,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold"
  },
  disabled: {
    backgroundColor: "#eee",
    borderColor: "#aaa"
  },
  disabledText: {
    color: "#aaa"
  }
});

export default CustomButton;
