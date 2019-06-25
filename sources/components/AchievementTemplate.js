import React, { Component } from "react";
import { Text } from "react-native";
import { Card, CardItem, Body } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  dimensions,
  centrify,
  fontStyle,
  BasePageTemplateStyle
} from "../../Styles";

export default class AchievementTemplate extends Component {
  render() {
    return (
      <Card style={[{ height: "100%" }, dimensions.fullHeight, centrify]}>
        <CardItem style={BasePageTemplateStyle.logo}>
          <Body
            style={[
              BasePageTemplateStyle.icon,
              centrify,
              { borderColor: "gold" }
            ]}
          >
            <Icon name="medal" color="gold" size={140} />
          </Body>
        </CardItem>
        <CardItem>
          <Body style={centrify}>
            <Text style={[fontStyle.title]}>Достижения</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={{ fontSize: fontStyle.md }}>Достижения: 0</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
