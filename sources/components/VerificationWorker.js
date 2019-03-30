import React, { Component } from "react";
import { View, Button } from "react-native";

export default class VerificationWorker extends Component {
  constructor() {
    super()
    content: {};
  }

  async pressSumbit() {
    const res = await fetch("http://172.30.235.145:8000/api/users");
    data = await res.json();
  }

  async validateOrder(user) {
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
      this.setState({ content: await rawResponse.json() });
      if ((this.state.content.answer) == '1') {
        alert("USER VERIFIED");
        this.props.navigation.navigate("MainScreen");
      } else {
        alert("USER DENIED");
      }
    })();
  }

  enter = () => {
    var currentUser = {
      login: this.props.login,
      password: this.props.password
    };
    this.pressSumbit();
    this.validateOrder(currentUser);
  };

  static navigationOptions = {
    header: null,
    title: "LoginScreen"
  };

  render() {
    return (
      <View>
        <Button color="#000" onPress={() => this.enter()} title="Sumbit" />
      </View>
    );
  }
}
