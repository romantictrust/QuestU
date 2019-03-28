import React, { Component } from "react";
import { CardItem, Body, Button, Text } from "native-base";

export default class MapWorker extends Component {

  constructor(){
    super()
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0
      }
    }
  }

  comparator = () => {
    this.getUserLocation();
  }
 
  getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      var initLat = parseFloat(position.coords.latitude);
      var initLon = parseFloat(position.coords.longitude);

      var initialReg = {
        latitude: initLat,
        longitude: initLon
      }
      
      this.setState({initialPosition: initialReg})
      console.log(this.state.initialPosition);
    }, (err) => alert(JSON.stringify(err)), 
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
  }

  runQR = () => {

  }

  render() {
    const item = this.props.item;
    return (
      <CardItem><Body>
            <Button block success onPress={this.comparator}>
            <Text>Отсканировать код</Text>
          </Button></Body></CardItem>
    );
  }
}
