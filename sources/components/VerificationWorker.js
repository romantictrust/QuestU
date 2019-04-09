import React, { Component } from "react";
import { View, Button } from "react-native";

export default class VerificationWorker extends Component {
  async validateOrder(user) {
    await fetch("http://192.168.0.100:8000/api/tocheckdata", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(response => {
        if (response.answer == '1') {
          this.props.navigation.navigate("MainScreen");
        }
        alert(response.message);
      });
  }

  enter = () => {
    var currentUser = {
      login: this.props.login,
      password: this.props.password
    };
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
