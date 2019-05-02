import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Card, Body, Text } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

export default class OnSuccess extends Component {
  render() {
    return (
      <Card style={styles.cards}>
        <Body style={styles.block}>
          <Icon name="check-circle" size={80} style={styles.icons} />
          <Text style={styles.text}>Success: +50 points</Text>
        </Body>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  cards: {
    width: "99%",
    height: 500,
    backgroundColor: "#15a52d",
  },
  block: {
    marginTop: "50%"
  },
  icons:{
      color: "white",
  },
  text: {
    marginTop: "5%",
      color: "white",
      fontSize: 25
  }
});
