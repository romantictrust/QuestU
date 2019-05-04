import React, { Component } from "react";
import { Container, Content } from "native-base";
import AchievementTemplate from "../sources/components/AchievementTemplate";

export default class AchievementsScreen extends Component {
  static navigationOptions = {
    title: "Achivements"
  };
  render() {
    return (
      <Container style={{ flex: 1, justifyContent: "center" }}>
        <Content>
          <AchievementTemplate />
        </Content>
      </Container>
    );
  }
}
