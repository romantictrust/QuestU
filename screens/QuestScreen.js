import React, { Component } from "react";
import {
  StyleSheet
} from "react-native";
import {
  Container,
  Content,
} from "native-base";
import QuestTemplate from "../sources/components/QuestTemplate";

export default class QuestScreen extends Component {
  static navigationOptions = {
    title: "Quest Screen"
  };
  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("item");
    return (
      <Container style={styles.container}>
        <Content>
         <QuestTemplate item={item}/>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4d4d6"
  }
});
