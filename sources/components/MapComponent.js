import React, { Component } from "react";
import { CardItem, Body } from "native-base";
import { StyleSheet, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import GLOBALS from "../../Globals";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.026;
const LONGTITUTE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class MapComponet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      destination: {
        latitude: this.props.item.latitude,
        longitude: this.props.item.longitude
      }
    };
  }

  watchID = null;

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        var initLat = parseFloat(position.coords.latitude);
        var initLon = parseFloat(position.coords.longitude);

        var initialReg = {
          latitude: initLat,
          longitude: initLon,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGTITUTE_DELTA
        };

        this.setState({ initialPosition: initialReg });
      },
      err => alert(JSON.stringify(err)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    this.watchID = navigator.geolocation.watchPosition(position => {
      var initLat = parseFloat(position.coords.latitude);
      var initLon = parseFloat(position.coords.longitude);

      var lastReg = {
        latitude: initLat,
        longitude: initLon,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGTITUTE_DELTA
      };
      this.setState({ initialPosition: lastReg });
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    const GOOGLE_MAPS_APIKEY = GLOBALS.GOOGLE_MAPS_APIKEY;

    return (
      <CardItem style={{ height: 375, marginTop: "3%" }}>
        <Body style={{ ...StyleSheet.absoluteFillObject }}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{ ...StyleSheet.absoluteFillObject }}
            region={this.state.initialPosition}
            followUserLocation
            loadingEnabled
            showsUserLocation={true}
            scrollEnabled={false}
            rotateEnabled={false}
            mapType="hybrid"
          >
            <Marker
              coordinate={{
                latitude: this.state.destination.latitude,
                longitude: this.state.destination.longitude
              }}
              title={this.state.item.title}
              description={this.state.item.location}
            />
            <MapViewDirections
              origin={this.state.initialPosition}
              destination={this.state.destination}
              apikey={GOOGLE_MAPS_APIKEY}
              // driving walking
              mode="walking"
              strokeWidth={4}
              strokeColor="red"
            />
          </MapView>
        </Body>
      </CardItem>
    );
  }
}
