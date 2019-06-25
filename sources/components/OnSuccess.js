import React, { Component } from "react";
import { Card, Body, Text } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { fontStyle, colorStyle, dimensions } from "../../Styles";

export default class OnSuccess extends Component {
  render() {
    return (
      <Card style={[ dimensions.fullWidth, { backgroundColor: colorStyle.green, height: 500 }]}>
        <Body style={{ marginTop: "50%" }}>
          <Icon name="check-circle" size={80} color="white"/>
          <Text style={{fontSize: fontStyle.extra, color: 'white', marginTop: '3%'}}>Success: +50 points</Text>
        </Body>
      </Card>
    );
  }
}
