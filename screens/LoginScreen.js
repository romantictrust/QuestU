import React, { Component } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StyleSheet, TouchableOpacity, Text, View, Image, Button, TextInput} from "react-native";

async function pressSumbit() {
  const res = await fetch("http://172.30.235.145:8000/api/users");
  data = await res.json();
}

async function validateOrder(user) {
  (async () => {
    const rawResponse = await fetch(
      "http://172.30.235.145:8000/api/tocheckdata",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      }
    );
    const content = await rawResponse.json();
  })();
  if ((await verificationPass()) == 1) {
    alert("USER VERIFIED");
    // ()=>this.props.navigation.navigate('MainScreen')
  } else {
    alert("USER DENIED");
  }
}

async function verificationPass() {
  const res = await fetch("http://172.30.235.145:8000/api/verificationpass");
  let answer = await res.json();
  answer = answer.answer;
  if (answer != 1) {
    return 0;
  } else if (answer == 1) {
    return 1;
  }
}


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    };
  }

  enter = () => {
    const { login, password } = this.state;
    var currentUser = {
      login: login,
      password: password
    };
    pressSumbit();
    validateOrder(currentUser);
  };

  static navigationOptions = {
    header: null,
    title: 'LoginScreen'
  };
  
  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Image
            style={styles.startPic}
            source={{
              uri:
                "https://pp.userapi.com/c850124/v850124169/c2212/HoBcxIVzafA.jpg"
            }}
          />
         <Text style={[styles.basicText, styles.loginTxt]}>Login</Text>
        <TextInput
          style={styles.inputs}
          underlineColorAndroid="transparent"
          placeholder="Login"
          autoCapitalize="none"
          onChangeText={login => this.setState({ login })}
        />
        <Text style={[styles.basicText, styles.passTxt]}>Password</Text>
        <TextInput
          style={styles.inputs}
          underlineColorAndroid="transparent"
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={password => this.setState({ password })}
          secureTextEntry={true}
        />
        <Button color="#000" onPress={()=>this.props.navigation.navigate('MainScreen')} title="Sumbit" />
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('RegScreen')}>
            <Text style={[styles.basicText, styles.register]}>register</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  loginTxt: { marginTop: 160, marginBottom: 13 },
  passTxt: { marginBottom: 13 },
  inputs: {
    borderWidth: 2,
    height: 48,
    width: 240,
    borderRadius: 5,
    marginBottom: 20
  },
  basicText: {
    color: "#000",
    fontSize: 22,
    fontWeight: "600"
  },
  startPic: {
    width: 200,
    height: 50,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 55
  },
  register: { marginTop: "20%" }
});
