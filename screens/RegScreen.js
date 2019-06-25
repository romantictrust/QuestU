import React, { Component } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import GLOBALS from "../Globals";
import { colorStyle, containerStyle, fontStyle, inputStyle, imputsMargin} from "../Styles";

function pushUser(user) {
  (async () => {
    const rawResponse = await fetch(
      `${GLOBALS.HOSTING_URL}/api/pushuser`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      }
    );
    const content = await rawResponse.json();
  })();
}

const emailRegExp = GLOBALS.VERIFICATORS.EMAIL_REG_EXP;
const loginRegExp = GLOBALS.VERIFICATORS.LOGIN_REG_EXP;
const passwordRegExp = GLOBALS.VERIFICATORS.PASSWORD_REG_EXP;
const nameRegExp = GLOBALS.VERIFICATORS.NAME_REG_EXP;

export default class RegScreen extends Component {
  static navigationOptions = {
    title: "RegScreen"
  };
  constructor() {
    super();
    this.state = {
      email: "",
      login: "",
      password: "",
      name: "",
      message: "",
      error: ""
    };
  }
  sumbitReg = () => {
    setTimeout(() => this.setState({ message: "" }));
    const { email, login, password, name } = this.state;
    var user = {
      email: email,
      login: login,
      password: password,
      name: name
    };
    this.verifier(user);
    if (this.state.message == "Registered") {
      pushUser(user);
    }
  };
  verifier = user => {
    if (!emailRegExp.test(user.email))
      this.setState({ error: "Invalid Email" });
    else if (!loginRegExp.test(user.login))
      this.setState({ error: "Invalid Login" });
    else if (!passwordRegExp.test(user.password))
      this.setState({ error: "Invalid Password" });
    else if (!nameRegExp.test(user.name))
      this.setState({ error: "Invalid Name" });
    else this.setState({ error: "Registered" });
    setTimeout(() => this.setState({ message: this.state.error }));
  };
  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={containerStyle}>
          <Text style={[fontStyle.boldText, {marginTop: "5%", fontSize: 29}]}>Registration</Text>
          <Text style={[fontStyle.boldText, imputsMargin, {marginTop: 50}]}>Email</Text>
          <TextInput
            style={inputStyle}
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
          />
          <Text style={[fontStyle.boldText, imputsMargin]}>Login</Text>
          <TextInput
            style={inputStyle}
            placeholder="Login"
            autoCapitalize="none"
            onChangeText={login => this.setState({ login })}
          />
          <Text style={[fontStyle.boldText, imputsMargin]}>Password</Text>
          <TextInput
            style={inputStyle}
            placeholder="Password"
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
          />
          <Text style={[fontStyle.boldText, imputsMargin]}>Name</Text>
          <TextInput
            style={inputStyle}
            placeholder="Name"
            autoCapitalize="none"
            onChangeText={name => this.setState({ name })}
          />
          <Text style={[{color: 'red', fontSize: fontStyle.sm, marginBottom: '5%'}]}>{this.state.message}</Text>
          <Button color={colorStyle.black} onPress={this.sumbitReg} title="Sumbit" />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

