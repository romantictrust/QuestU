import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { withNavigation } from 'react-navigation';

import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button
} from "native-base";

class BlockTemplate extends Component {
  static defaultProps = {
    likes: 0,
    title: "NO TITLE",
    location: "NO LOCATION",
    picture: "http://www.childwomenmin.gov.lk/themes/childwomenmin/assets/images/default-image.jpg",
    description: "NO DESCRIPTON"
  } 
  onQuest = () => {
    const item = this.props.item
    this.props.navigation.navigate("QuestScreen", {item: item})
  }
  render() {
    return (
      <Card style={styles.cards}>
        <CardItem>
          <Left>
            <Body>
              <Text style={styles.title}>{this.props.title}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem style={{ height: 10 }}>
          <Left>
            <Body>
              <Text note style={styles.location}>
                {this.props.location}
              </Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
          
            <Image
              style={styles.images}
              source={{ uri: this.props.picture }}
            />
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={styles.description}>{this.props.description}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent style={{ marginLeft: "1%" }}>
              <Icon name="heart" size={20} style={styles.icons} />
            </Button>
            <Button transparent>
              <Icon name="share" size={20} style={styles.icons} />
            </Button>
            <Button key={this.props.key}
              onPress={() => this.onQuest()}
              transparent
              style={{ marginLeft: "25.5%" }}
            >
              <Icon name="arrow-up" color="#ff9616" size={24} />
            </Button>
            <Text style={styles.likes}>Likes {this.props.likes}</Text>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(BlockTemplate);

const styles = StyleSheet.create({
  cards: {
    width: "96%",
    marginLeft: "2%",
    top: 4,
    borderColor: "#f0f0",
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 5,
    marginBottom: 10
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
    paddingLeft: "23%",
    fontSize: 16
  }
});
