import React, { Component } from "react";
import { Text } from "react-native";
import { Card, CardItem, Body, Left, Button, Accordion } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import MapComponent from "./MapComponent";
import MapWorker from "./MapWorker";

import { dimensions, fontStyle, accordion } from "../../Styles";

export default class QuesTemplate extends Component {
  _renderContent(item) {
    return (
      <Text style={[accordion, { fontSize: fontStyle.md }]}>
        {item.content}
      </Text>
    );
  }
  render() {
    const item = this.props.item;
    const dataArray = [
      {
        title: "Описание квеста                                        ",
        content: item.story
      }
    ];
    return (
      <Card style={ dimensions.fullWidth }>
        <CardItem>
          <Left>
            <Body>
              <Text style={fontStyle.title}>{item.title}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem style={{ height: 10 }}>
          <Left>
            <Body>
              <Text note style={{ fontSize: fontStyle.md }}>
                {item.location}
              </Text>
            </Body>
          </Left>
        </CardItem>
        <MapComponent item={item} />
        <CardItem>
          <Body>
            <Accordion
              dataArray={dataArray}
              renderContent={this._renderContent}
            />
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Body>
              <Text>Очки за выполнение: {item.score}</Text>
            </Body>
          </Left>
        </CardItem>
        <MapWorker item={item} />
        <CardItem>
          <Left>
            <Button transparent style={{ marginLeft: "1%" }}>
              <Icon name="heart" size={20} />
            </Button>
            <Button transparent>
              <Icon name="share" size={20} />
            </Button>
            <Text style={[{ fontSize: fontStyle.md, paddingLeft: "60%" }]}>
              Likes {item.likes}
            </Text>
          </Left>
        </CardItem>
      </Card>
    );
  }
}
