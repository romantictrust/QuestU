import React, { Component } from "react";
import { Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { withNavigation } from "react-navigation";
import { Card, CardItem, Body, Left, Button } from "native-base";
import GLOBALS from "../../Globals";
import { colorStyle, fontStyle, BlockTemplateStyle } from "../../Styles"

class BlockTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = { item: this.props.item };
  }

  static defaultProps = {
    likes: 0,
    title: "",
    location: "",
    picture: GLOBALS.NO_PICTURE,
    description: "",
    score: 0,
    latitude: 0,
    longitude: 0
  };

  onQuest = () => {
    this.props.navigation.navigate("QuestScreen", { item: this.state.item });
  };

  render() {
    return (
      <Card style={BlockTemplateStyle.cardStyle}>
        <CardItem>
          <Left>
            <Body>
              <Text style={[fontStyle.title, {marginTop: 5,}]}>{this.state.item.title}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem style={{ height: 10 }}>
          <Left>
            <Body>
              <Text note style={{fontSize: fontStyle.md}}>
                {this.state.item.location}
              </Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <Image
              style={BlockTemplateStyle.cardImageStyle}
              source={{ uri: this.state.item.picture }}
            />
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={[fontStyle.description, {marginLeft: 3}]}>
              {this.state.item.description}
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent style={{ marginLeft: "1%" }}>
              <Icon name="heart" size={20}/>
            </Button>
            <Button transparent>
              <Icon name="share" size={20}/>
            </Button>
            <Button
              key={this.state.item.key}
              onPress={() => this.onQuest()}
              transparent
              style={{ marginLeft: "22%" }}
            >
              <Icon name="arrow-up" color={colorStyle.orange} size={24} />
            </Button>
            <Text style={{fontSize: fontStyle.md,paddingLeft: "23%"}}>Likes {this.state.item.likes}</Text>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(BlockTemplate);
