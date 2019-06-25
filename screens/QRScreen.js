import React, { Component } from "react";
import { View } from "native-base";
import QRCodeScanner from "react-native-qrcode-scanner";

export default class QRScreen extends Component {
  static navigationOptions = {
    title: "QRScreen"
  };

  onSuccess(e) {
    this.props.navigation.navigate("QuestScreen", { qrdata: e.data });
  }

  render() {
    return (
      <View>
        <QRCodeScanner
          onRead={this.onSuccess.bind(this)}
          showMarker={true}
          checkAndroid6Permissions={true}
        />
      </View>
    );
  }
}
