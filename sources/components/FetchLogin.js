import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  AppRegistry,
  Button,
  TouchableOpacity
} from "react-native";

async function pressSumbit() {
  const res = await fetch("http://172.30.235.145:8000/api/users");
  data = await res.json();
}

async function validateOrder(user) {
  (async () => {
    const rawResponse = await fetch(
      "http://172.30.235.145:8000/api/tocheckdata",
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
  if ((await verificationPass()) == 1) {
    alert("USER VERIFIED");
    () => {
      this.props.navigation.navigate("MainScreen");
    };
  } else {
    alert("USER DENIED");
  }
}

async function verificationPass() {
  const res = await fetch("http://172.30.235.145:8000/api/verificationpass");
  let answer = await res.json();
  answer = answer.answer;
  if (answer != 1) {
    return 0;
  } else if (answer == 1) {
    return 1;
  }
}

export default class FetchLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    };
  }

  enter = () => {
    const { login, password } = this.state;
    var currentUser = {
      login: login,
      password: password
    };
    pressSumbit();
    validateOrder(currentUser);
  };

  render() {
    return (
      <View>
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
        <Button
          color="#000"
          onPress={() => this.props.navigation.navigate("MainScreen")}
          title="Sumbit"
        />
      </View>
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
  basicText: {
    color: "#000",
    fontSize: 22,
    fontWeight: "600"
  },
  loginTxt: { marginTop: 160, marginBottom: 13 },
  passTxt: { marginBottom: 13 },
  inputs: {
    borderWidth: 2,
    height: 48,
    width: 240,
    borderRadius: 5,
    marginBottom: 20
  }
});

AppRegistry.registerComponent("FetchLogin", () => FetchLogin);
