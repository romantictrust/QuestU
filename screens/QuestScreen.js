import React, { Component } from "react";
import {
  StyleSheet
} from "react-native";
import {
  Container,
  Content,
  Text
} from "native-base";
import QuestTemplate from "../sources/components/QuestTemplate";
import OnSuccess from '../sources/components/OnSuccess'

export default class QuestScreen extends Component {
  static navigationOptions = {
    title: "Quest Screen"
  };
  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("item");
    const qrdata = navigation.getParam("qrdata");

    if(qrdata && String(qrdata).substring(qrdata.length - 5) == "found")
    return( <Container style={[styles.container]}>
      <Content>
      <OnSuccess/>
      </Content>
      </Container>);

    else
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
