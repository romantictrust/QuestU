import React, { Component } from "react";
import { CardItem, Body, Button, Text } from "native-base";

export default class MapWorker extends Component {
 
  getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
    }, err => console.log(err));
  }

  render() {
    const item = this.props.item;
    return (
      <CardItem><Body>
            <Button block success onPress={this.getUserLocation}>
            <Text>Отсканировать код</Text>
          </Button></Body></CardItem>
    );
  }
}
