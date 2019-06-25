import React, { Component } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableOpacity, Text, View, Image, TextInput } from "react-native";
import VerificationWorker from "../sources/components/VerificationWorker";
import GLOBALS from "../Globals";
import {
  containerStyle,
  fontStyle,
  inputStyle,
  LoginScreenStyle,
  imputsMargin
} from "../Styles";

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
        <View style={containerStyle}>
          <Image
            style={LoginScreenStyle.logoPic}
            source={{
              uri: GLOBALS.QUESTU_LOGO
            }}
          />
          <Text style={[fontStyle.boldText, imputsMargin, { marginTop: 160 }]}>
            Login
          </Text>
          <TextInput
            style={inputStyle}
            underlineColorAndroid="transparent"
            placeholder="Login"
            autoCapitalize="none"
            onChangeText={login => this.setState({ login })}
          />
          <Text style={[fontStyle.boldText, imputsMargin]}>Password</Text>
          <TextInput
            style={inputStyle}
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
            <Text style={[fontStyle.boldText, { marginTop: "10%" }]}>
              register
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
