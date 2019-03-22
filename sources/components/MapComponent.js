import React, { Component } from "react";
import { CardItem, Body } from "native-base";
import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

export default class MapComponet extends Component {
  render() {
    return (
      <CardItem style={styles.mapBox}>
        <Body style={styles.mapBody}><MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          showsUserLocation={true}
        ></MapView></Body>
      </CardItem>
    );
  }
}

const styles = StyleSheet.create({ 
  mapBox: {height: 375, marginTop:'3%'},
  mapBody: { ... StyleSheet.absoluteFillObject },
    map: { ...StyleSheet.absoluteFillObject,}
});
