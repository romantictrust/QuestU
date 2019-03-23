import React, { Component } from "react";
import { CardItem, Body } from "native-base";
import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

export default class MapComponet extends Component {
  render() {
    const item = this.props.item;
    return (
      <CardItem style={styles.mapBox}>
        <Body style={styles.mapBody}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: item.latitude,
              longitude: item.longitude,
              latitudeDelta: 0.07,
              longitudeDelta: 0.07
            }}
            showsUserLocation={true}
            scrollEnabled={false}
            rotateEnabled={false}
            // onRegionChange={this.onRegionChange}
          >
            <Marker
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude
              }}
              title={item.title}
              description={item.location}
            />
          </MapView>
        </Body>
      </CardItem>
    );
  }
}

const styles = StyleSheet.create({
  mapBox: { height: 375, marginTop: "3%" },
  mapBody: { ...StyleSheet.absoluteFillObject },
  map: { ...StyleSheet.absoluteFillObject }
});
