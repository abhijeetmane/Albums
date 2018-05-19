import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { AsyncStorage } from "react-native";
import startApp from "../components/StartApp";
class Albums extends Component {
  logOutHandler = () => {
    AsyncStorage.removeItem("auth:userId");
    startApp();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Albums</Text>
        <Button onPress={this.logOutHandler} title="Logout" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Albums;
