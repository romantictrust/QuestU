import React, { Component } from "react";
import { CardItem, Body, Button, Text } from "native-base";

export default class MapWorker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questCoords: {
        latitude: this.props.item.latitude,
        longitude: this.props.item.longitude
      },
      processed: false,
      initialPosition: {
        latitude: 0,
        longitude: 0
      }
    };
  }

  comparator = () => {
    if ((String(this.state.initialPosition.latitude).substring(0, 6) === String(this.state.questCoords.latitude).substring(0, 6)) &&
        (String(this.state.initialPosition.longitude).substring(0, 6) === String(this.state.questCoords.longitude).substring(0, 6))){
          alert("Ready to scan");
          this.setState({processed: true})
        }
    else {alert("You are not in the place")}
  };

  async componentDidMount(){
    await navigator.geolocation.getCurrentPosition(
        position => {
          var initLat = parseFloat(position.coords.latitude);
          var initLon = parseFloat(position.coords.longitude);

          var initialReg = {
            latitude: initLat,
            longitude: initLon
          };

          this.setState({ initialPosition: initialReg });
        },
        err => alert(JSON.stringify(err)),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );

}

  runQR = () => {};

  render() {
    return (
      <CardItem>
        <Body>
          <Button block success onPress={this.comparator}>
            <Text>Отсканировать код</Text>
          </Button>
        </Body>
      </CardItem>
    );
  }
}
