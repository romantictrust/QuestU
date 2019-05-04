import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { Card, CardItem, Body } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

export default class ProfileTemplate extends Component {
  render() {
    return (
      <Card style={[styles.card, styles.center]}>
        <CardItem style={styles.logo}>
          <Body style={[styles.icon, styles.center]}>
            <Icon name="user" color="black" size={200} />
          </Body>
        </CardItem>
        <CardItem>
          <Body style={styles.center}>
            <Text style={styles.userName}>this.props.userName</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={styles.mainText}>Очки: this.props.userScores</Text>
            <Text style={styles.mainText}>
              Достижения: this.props.userScores
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 270
  },
  card: {
    width: "100%",
    height: "100%"
  },
  icon: {
    borderWidth: 3,
    borderColor: "#000",
    borderRadius: 200,
    width: 230,
    height: 230
  },
  userName: {
    textAlign: "center",
    color: "#000",
    fontSize: 23
  },
  mainText: {
    fontSize: 17,
    paddingTop: 5
  }
});
