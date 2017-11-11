import React from "react";
import { Text, View, TextInput, KeyboardAvoidingView, Button,Image} from "react-native";

import conf from '../config.js';

export default class OrgSignUp extends React.Component {
  constructor(){
    super();
    this.state = {
        name: "" ,
        email: "",
        password: "",
        signedUp: false
    };
  }


  onSignUp () {
    fetch(conf.url + '/orgs/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password:this.state.password
      })
    })
    .then((response) => response.json())
    .then((data) => {
      this.props.show("showSignInOrg");
     console.log(data)
    })
    .catch((error) => {
      console.error(error);
    });
  }


    render() {
        return (
            <View>
                <View>
          <Image source={require("../images/blue.jpg")} > 
            <View style = {{marginTop:60, marginRight: 50 ,marginLeft: 90}}>
      
            <Text style={{fontWeight: "bold", marginBottom: 30,fontSize:25,color:"white", marginBottom: 30, marginLeft:40 }}> Sign Up
            </Text>
            
          <Text style={{fontWeight: "bold",fontSize:13,color:"white"}}>Username:</Text>
          <TextInput
            style={{height: 50, width: 200 }}
            placeholder="Enter name"
            returnKeyType = "next"
            onChangeText={(name) => this.setState({name})}
          />
          <Text style={{fontWeight: "bold",fontSize:13,color:"white"}}>Email:</Text>
          <TextInput
            style={{height: 50, width: 200}}
            placeholder="Enter Email"
            returnKeyType = "next"
            keyboardType = "email-address"
            autoCapitalize = "none"
            onChangeText={(email) => this.setState({email})}
          />
          <Text style={{fontWeight: "bold",fontSize:13,color:"white"}}>Password:</Text>
          <TextInput
            style={{height: 50, width: 200}}
            placeholder="Enter Password"
            returnKeyType = "go"
            secureTextEntry = {true}
            onChangeText={(password) => this.setState({password})}
          /><Text>{'\n'}</Text>
          <View style={{marginLeft: 10,marginRight: 150}}>
          <Button title = "submit" onPress = {this.onSignUp.bind(this)}/>
          </View>
          <View style={{marginLeft: 10,marginRight: 150}}>
          <Text>{'\n'}{'\n'}</Text>
       <Button title = "BACK" style = {{marginTop:100}} onPress = {() => this.props.show("showSignUp")}/>
          </View>
           </View>
          </Image>
          </View>
            </View>
            
        );
    }

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgb(255, 0, 255)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });