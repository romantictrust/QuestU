import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function pushUser(user) {
  (async () => {
    const rawResponse = await fetch(
      "https://questu-1553257094787.appspot.com/api/pushuser",
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

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const loginRegExp = /^[a-zA-Z0-9]{5,19}$/;
const passwordRegExp = /^[a-zA-Z0-9]{5,19}$/;
const nameRegExp = /^[a-zA-Z]{2,19}$/;

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
    console.log(this.state);
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
        <View style={styles.container}>
          <Text style={[styles.register]}>Registration</Text>
          <Text style={[styles.basicText, styles.emailTxt]}>Email</Text>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
          />
          <Text style={[styles.basicText, styles.loginTxt]}>Login</Text>
          <TextInput
            style={styles.inputs}
            placeholder="Login"
            autoCapitalize="none"
            onChangeText={login => this.setState({ login })}
          />
          <Text style={[styles.basicText, styles.passTxt]}>Password</Text>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
          />
          <Text style={[styles.basicText, styles.nameTxt]}>Name</Text>
          <TextInput
            style={styles.inputs}
            placeholder="Name"
            autoCapitalize="none"
            onChangeText={name => this.setState({ name })}
          />
          <Text style={[styles.message]}>{this.state.message}</Text>
          <Button color="#000" onPress={this.sumbitReg} title="Sumbit" />
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
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  nameTxt: { marginBottom: 13 },
  emailTxt: { marginTop: 50, marginBottom: 13 },
  loginTxt: { marginBottom: 13 },
  passTxt: { marginBottom: 13 },
  inputs: {
    borderWidth: 2,
    height: 45,
    width: 240,
    borderRadius: 5,
    marginBottom: 20
  },
  basicText: {
    color: "#000",
    fontSize: 21,
    fontWeight: "600"
  },
  message: { color: "red", fontSize: 14, marginBottom: "5%" },
  register: { color: "#000", marginTop: "5%", fontSize: 29, fontWeight: "800" }
});
