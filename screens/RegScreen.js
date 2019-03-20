import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


function pushUser(user) {
  (async () => {
    const rawResponse = await fetch("http://172.30.235.145:8000/api/pushuser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    const content = await rawResponse.json();
  })();
  alert('registered');
}

export default class RegScreen extends Component {
    static navigationOptions = {
        title: 'RegScreen'
      };
      constructor(props) {
        super(props);
        this.state = {
          email: "",
          login: "",
          password: "",
          name: ""
        };
      }
      sumbitReg = () => {
        const { email, login, password, name } = this.state;
        var user = {
          email: email,
          login: login,
          password: password,
          name: name
        };
        pushUser(user);
      };
      render() {
        return (
          <KeyboardAwareScrollView>
            <View style={styles.container}>
            <Text style={[styles.register]}>Registration</Text>
            <Text style={[styles.basicText, styles.emailTxt]}>Email</Text>
            <TextInput
              style={styles.inputs}
              underlineColorAndroid="transparent"
              placeholder="Email"
              autoCapitalize="none"
              onChangeText={email => this.setState({ email })}
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
            />
            <Text style={[styles.basicText, styles.nameTxt]}>Name</Text>
            <TextInput
              style={styles.inputs}
              underlineColorAndroid="transparent"
              placeholder="Name"
              autoCapitalize="none"
              onChangeText={name => this.setState({ name })}
            />
            <Button color="#000" onPress={this.sumbitReg} title="Sumbit" />
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
      nameTxt : {marginBottom: 13},
      emailTxt: {marginTop: 50, marginBottom: 13},
      loginTxt: { marginBottom: 13 },
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
      register: { color: "#000", marginTop: "10%", fontSize: 29, fontWeight: "800" }
    });
    