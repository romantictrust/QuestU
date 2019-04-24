import React, { Component } from "react";
import { CardItem, Body, Button, Text } from "native-base";
import QRComponent from "./QRComponent";

export default class MapWorker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questCoords: {
        latitude: this.props.item.latitude,
        longitude: this.props.item.longitude
      },
      initialPosition: {
        latitude: 0,
        longitude: 0
      }
    };
  }

  comparator = () => {
    if (
      String(this.state.initialPosition.latitude).substring(0, 6) ===
        String(this.state.questCoords.latitude).substring(0, 6) &&
      String(this.state.initialPosition.longitude).substring(0, 6) ===
        String(this.state.questCoords.longitude).substring(0, 6)
    ) {
      this.qr.runQR(true);
    } else {
      this.qr.runQR(false);
      alert("You are not in the place");
    }
  };

  async componentDidMount() {
    await navigator.geolocation.getCurrentPosition(
      position => {
        var initLat = parseFloat(position.coords.latitude);
        var initLon = parseFloat(position.coords.longitude);

        this.setState({
          initialPosition: {
            latitude: initLat,
            longitude: initLon
          }
        });
      },
      err => alert(JSON.stringify(err)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    return (
      <CardItem>
        <Body>
          <Button block success onPress={this.comparator}>
            <Text>Отсканировать код</Text>
          </Button>
          <QRComponent onRef={ref => (this.qr = ref)} />
        </Body>
      </CardItem>
    );
  }
}
