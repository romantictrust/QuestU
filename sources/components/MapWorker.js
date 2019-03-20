import React, { Component } from "react";
import { CardItem, Body, Button, Text } from "native-base";

export default class MapWorker extends Component {
 

  render() {
    return (
      <CardItem><Body>
            <Button block success>
            <Text>Отсканировать код</Text>
          </Button></Body></CardItem>
    );
  }
}
