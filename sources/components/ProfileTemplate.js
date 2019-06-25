import React, { Component } from "react";
import { Text } from "react-native";
import { Card, CardItem, Body } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { centrify, dimensions, fontStyle, BasePageTemplateStyle } from "../../Styles"

export default class ProfileTemplate extends Component {
  render() {
    return (
      <Card style={[{height: '100%'}, dimensions.fullHeight, centrify]}>
        <CardItem style={BasePageTemplateStyle.logo}>
          <Body style={[BasePageTemplateStyle.icon, centrify]}>
            <Icon name="user" color="black" size={200} />
          </Body>
        </CardItem>
        <CardItem>
          <Body style={centrify}>
            <Text style={fontStyle.title}>Пользователь</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={{fontSize: fontStyle.md}}>Очки: 0</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
