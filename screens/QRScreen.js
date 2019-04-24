import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity } from "native-base";
import QRCodeScanner from "react-native-qrcode-scanner";

export default class QRScreen extends Component {
  static navigationOptions = {
    title: "QRScreen"
  };

  onSuccess(e) {
    this.props.navigation.navigate("QuestScreen",{ qrdata: e.data });
  }

  render() {
    return (
      <View>
        <QRCodeScanner onRead={this.onSuccess.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: "#245"
  },
  textBold: {
    fontWeight: "500",
    color: "#000"
  },
  buttonText: {
    fontSize: 21,
    color: "rgb(0,122,255)"
  },
  buttonTouchable: {
    padding: 16
  }
});
