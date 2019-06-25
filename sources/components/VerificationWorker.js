import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import GLOBALS from "../../Globals";
import {messageStyle} from "../../Styles";

export default class VerificationWorker extends Component {

constructor(){
  super();
  this.state = {
    message: "",
  }
}

  async validateOrder(user) {
    await fetch(`${GLOBALS.HOSTING_URL}/api/tocheckdata`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.answer == "1") {
          this.props.navigation.navigate("MainScreen");
        }
        else setTimeout(() => {this.setState({message: "Wrong Login or Password"})})
      });
  }

  enter = () => {
    console.log("CLICK")
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
        <Text style={[messageStyle]}>{this.state.message}</Text>
        <Button color="#000" onPress={() => this.enter()} title="Sumbit" />
      </View>
    );
  }
}