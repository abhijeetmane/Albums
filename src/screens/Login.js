import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";

import InputText from "../components/common/InputText";
import HeadingText from "../components/common/HeadingText";
import backgroundImage from "../assets/background.png";
import Button from "../components/common/CustomButton";
import validate from "../utility/Validation";
import startApp from "../components/StartApp";
import { connect } from "react-redux";
import { saveAuth } from "../store/actions/";
class Login extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: "#0B365B",
    navBarTextColor: "#fff",
    navBarTextFontSize: 22,
    // iOS only
    statusBarTextColorSchemeSingleScreen: "light",
    //Android only
    navigationBarColor: "#0B365B",
    statusBarColor: "#fff",
    navBarTitleTextCentered: true
  };
  state = {
    viewMode: Dimensions.get("window").width > 400 ? "landscape" : "portrait",
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        }
      }
    }
  };
  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }
  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
  }
  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.width > 400 ? "landscape" : "portrait"
    });
  };
  loginhandler = () => {
    const authData = {
      email: this.state.controls.email
    };
    this.props.onLogin(authData);
  };
  updateInputState = (key, value) => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(value, prevState.controls[key].validationRules)
          }
        }
      };
    });
  };
  render() {
    let loginButton = (
      <Button
        color="#1A4B71"
        onPress={this.loginhandler}
        disabled={!this.state.controls.email.valid}
      >
        Log In
      </Button>
    );
    const { backgroundImage, container, input } = styles;
    return (
      <ImageBackground source={backgroundImage} style={backgroundImage}>
        <KeyboardAvoidingView style={container} behavior="padding">
          <HeadingText>Wel Come</HeadingText>
          <View
            style={
              this.state.viewMode === "portrait"
                ? styles.portraitInputContainer
                : styles.landscapeInputContainer
            }
          >
            <InputText
              style={input}
              placeholder="Email"
              value={this.state.controls.email.value}
              onChangeText={val => this.updateInputState("email", val)}
              valid={this.state.controls.email.valid}
              autoFocus
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
            />
          </View>
          {loginButton}
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage: {
    flex: 1,
    width: "100%"
  },
  landscapeInputContainer: {
    width: "40%",
    margin: 20
  },
  portraitInputContainer: {
    width: "80%",
    margin: 20
  },
  input: {
    backgroundColor: "#eee"
  }
});

const mapStateToProps = state => {
  return {
    isLoading: state.ui.isLoading,
    user: state.auth.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLogin: authData => dispatch(saveAuth(authData))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
