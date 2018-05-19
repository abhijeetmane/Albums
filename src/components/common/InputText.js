import React from "react";
import { TextInput, StyleSheet } from "react-native";

const InputText = props => (
  <TextInput
    {...props}
    style={[styles.input, props.style, props.valid ? null : styles.invalid]}
    underlineColorAndroid="transparent"
  />
);

const styles = StyleSheet.create({
  input: {
    width: "100%",
    padding: 5,
    margin: 8,
    borderWidth: 1,
    borderColor: "#bbb"
  },
  invalid: {
    backgroundColor: "#f9c0c0",
    borderColor: "red"
  }
});

export default InputText;
