import React, { Component } from "react";
import { CardItem, Body } from "native-base";
import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

export default class MapComponet extends Component {
  constructor(){
    super()
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0
      },
      finalPosition: {
        latitude: 0,
        longitude: 0
      }
    }
  }

  watchID = null;

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position)=>{
      var initLat = parseFloat(position.coords.latitude);
      var initLon = parseFloat(position.coords.longitude);

      var initialReg = {
        latitude: initLat,
        longitude: initLon
      }
      
      this.setState({initialPosition: initialReg})
    }, (err) => alert(JSON.stringify(err)), 
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});

    // Трейс тут связать с построением пути
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var initLat = parseFloat(position.coords.latitude);
      var initLon = parseFloat(position.coords.longitude);

      var lastReg = {
        latitude: initLat,
        longitude: initLon
      }
      this.setState({lastReg: lastReg})
    })
  }

  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    const item = this.props.item;
    const destination = { latitude: item.latitude, longitude: item.longitude};
    const GOOGLE_MAPS_APIKEY = "AIzaSyB2JLf08WBJ9takbdrl8DQhoS-mBK_XA_0";


    return (
      <CardItem style={styles.mapBox}>
        <Body style={styles.mapBody}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: Number(destination.latitude),
              longitude: Number(destination.longitude),

              // РАЗОБРАТЬСЯ
              latitudeDelta: Number(0.025),
              longitudeDelta: Number(0.025)
            }}
            showUserLocation
            followUserLocation
            loadingEnabled
            showsUserLocation={true}
            scrollEnabled={false}
            rotateEnabled={false}
            mapType="hybrid"
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

            {/* Сделать чтобы путь строился постоянно, 
            посмотреть на видео с постоянным трейсингом */}
            <MapViewDirections
              origin={this.state.initialPosition}
              destination={destination}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="red"
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
