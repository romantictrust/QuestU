import React, { Component } from "react";
import { View, Text } from "native-base";
import { withNavigation } from "react-navigation";

class QRComponent extends Component {
  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef();
  }

  constructor(props) {
    super(props);
    this.state = {
      processed: false
    };
  }

  locate(){
    this.props.navigation.navigate("QRScreen");
  }

  runQR = answer => {
    this.setState({ processed: answer });
    if (this.state.processed) {
      this.locate();
    }
  };

  render() {    
    return <View />;
  }
}

export default withNavigation(QRComponent);
