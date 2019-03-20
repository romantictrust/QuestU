import React, { Component } from "react";
import { CardItem, Body } from "native-base";
import { StyleSheet } from "react-native";

export default class MapComponet extends Component {
  render() {
    return (
      <CardItem>
        <Body style={styles.map}>{/* MAP */}</Body>
      </CardItem>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: 375,
    backgroundColor: "pink"
  }
});
