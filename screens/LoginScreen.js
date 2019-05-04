import React, { Component } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput
} from "react-native";
import VerificationWorker from "../sources/components/VerificationWorker";

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      login: "",
      password: ""
    };
  }

  static navigationOptions = {
    header: null,
    title: "LoginScreen"
  };
  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Image
            style={styles.startPic}
            source={{
              uri:
                "https://pp.userapi.com/c850124/v850124169/c2212/HoBcxIVzafA.jpg"
            }}
          />
          <Text style={[styles.basicText, styles.loginTxt]}>Login</Text>
          <TextInput
            style={styles.inputs}
            underlineColorAndroid="transparent"
            placeholder="Login"
            autoCapitalize="none"
            onChangeText={login => this.setState({ login })}
          />
          <Text style={[styles.basicText, styles.passTxt]}>Password</Text>
          <TextInput
            style={styles.inputs}
            underlineColorAndroid="transparent"
            placeholder="Password"
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
            secureTextEntry={true}
          />
          <VerificationWorker
            navigation={this.props.navigation}
            login={this.state.login}
            password={this.state.password}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("RegScreen")}
          >
            <Text style={[styles.basicText, styles.register]}>register</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  loginTxt: { marginTop: 160, marginBottom: 13 },
  passTxt: { marginBottom: 13 },
  inputs: {
    borderWidth: 2,
    height: 48,
    width: 240,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 5
  },
  basicText: {
    color: "#000",
    fontSize: 22,
    fontWeight: "600"
  },
  startPic: {
    width: 200,
    height: 50,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 55
  },
  register: { marginTop: "20%" }
});
