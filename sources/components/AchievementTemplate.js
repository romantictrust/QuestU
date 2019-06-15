import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { Card, CardItem, Body } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class AchievementTemplate extends Component {
  render() {
    return (
      <Card style={[styles.card, styles.center]}>
        <CardItem style={styles.logo}>
          <Body style={[styles.icon, styles.center]}>
            <Icon name="medal" color="gold" size={140} />
          </Body>
        </CardItem>
        <CardItem>
          <Body style={styles.center}>
            <Text style={styles.achievements}>Достижения</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={styles.mainText}>
              Достижения: 0
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
    borderColor: "gold",
    borderRadius: 200,
    width: 230,
    height: 230
  },
  achievements: {
    textAlign: "center",
    color: "#000",
    fontSize: 23
  },
  mainText: {
    fontSize: 17,
    paddingTop: 5
  }
});
