import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  AppRegistry,
  Button,
  Image
} from "react-native";
import {
  Container,
  Content
} from "native-base";
import ProfileTemplate from '../sources/components/ProfileTemplate'

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: "Profile"
  };
  render() {
    return (
      <Container style={{flex: 1, justifyContent: 'center'}}>
        <Content>
          <ProfileTemplate/>
        </Content>
      </Container>
    );
  }
}
