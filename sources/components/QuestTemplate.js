import React, { Component } from "react";
import { StyleSheet, Text, Image } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Accordion
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import MapComponent from "./MapComponent";
import MapWorker from "./MapWorker";

export default class QuesTemplate extends Component {
  _renderContent(item) {
    return <Text style={styles.accordion}>{item.content}</Text>;
  }
  render() {
    const item = this.props.item;
    const dataArray = [
      {
        title:
          "Описание квеста                                        ",
        content: item.story
      }
    ];
    return (
      <Card style={styles.cards}>
        <CardItem>
          <Left>
            <Body>
              <Text style={styles.title}>{item.title}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem style={{ height: 10 }}>
          <Left>
            <Body>
              <Text note style={styles.location}>
                {item.location}
              </Text>
            </Body>
          </Left>
        </CardItem>
        <MapComponent item={item}/>
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
        <MapWorker item={item}/>
        <CardItem>
          <Left>
            <Button transparent style={{ marginLeft: "1%" }}>
              <Icon name="heart" size={20} style={styles.icons} />
            </Button>
            <Button transparent>
              <Icon name="share" size={20} style={styles.icons} />
            </Button>
            <Text style={styles.likes}>Likes {item.likes}</Text>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  cards: {
    width: "100%",
    height: "100%"
  },
  images: {
    width: "100%",
    height: 255,
    flex: 1
  },
  title: {
    marginTop: 5,
    color: "#000",
    fontSize: 23
  },
  location: {
    fontSize: 18
  },
  description: {
    fontSize: 17,
    color: "#000",
    marginLeft: 3
  },
  likes: {
    paddingLeft: "61%",
    fontSize: 16
  },
  map: {
    height: 375,
    backgroundColor: "pink"
  },
  accordion: {
    marginTop: 5,
    marginLeft: 5,
    fontSize: 15,
    fontStyle: "italic",
    color: "grey"
  }
});
