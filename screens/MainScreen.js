import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  RefreshControl
} from "react-native";
import { Container, Content } from "native-base";
import BlockTemplate from "../sources/components/BlockTemplate";
import QuestTabs from "../sources/components/Navigation";

class MainScreen extends Component {
  static navigationOptions = {
    title: "Main"
  };

  constructor(props) {
    super(props);
    this.state = { isLoading: true, refreshing: false };
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.fetchData().then(() => {
      this.setState({ refreshing: false });
    });
  };

  componentDidMount() { this.fetchData(); }

  fetchData = () => {
    return fetch("http://192.168.0.100:8000/api/quests")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            refreshing: false,
            dataSource: responseJson
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      );
    }
    return (
      <Container style={styles.container}>
        <Content
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          {/* key={item._id} */}
          {this.state.dataSource.map((item, key) => {
            return <BlockTemplate key={key} item={item} />;
          })}
        </Content>
      </Container>
    );
  }
}
export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4d4d6"
  }
});
