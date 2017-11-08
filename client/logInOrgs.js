
import React from "react";
import { StyleSheet, Alert, Text, TextInput, View,TouchableOpacity,KeyboardAvoidingView, Button,Image} from "react-native";

import Navbar from "./navbar";

import conf from '../config.js';

export default class LogInOrgs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nameorgs:'',
      password:'',
      signedIn: false,
      orgInfo:{}
    };
     fetch( conf.url + '/orgs/signout',
      {method:'GET'})
  }
    submitSignIn () { 
      
     fetch(conf.url + '/orgs/signin',
      {
          method:'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body:JSON.stringify({
            name:this.state.name ,
            password:this.state.password
          })
        }).then((response) => response.json())
           .then((data) => {
              console.log('------------------------------------>');
              // this.state.name = "";
              // this.state.password = "";
              console.log(data.events) 
              if (data.name) {
                this.state.orgInfo = data;
                this.setState({signedIn: true})
              } else {
                Alert.alert( 'SECURITY ALARM', data.message, [{text: 'OK', onPress: () => console.log('OK Pressed')}, ], { cancelable: true } )
              }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    signOut(){
      
      this.setState({signedIn: false})
    }
  

goToProfile () {
  if(this.state.signedIn) {
    return <Navbar info = {this.state.orgInfo} profile = {"org"} signOut = {this.signOut.bind(this)} events = {this.state.orgInfo.events} />;
  }

  else{
    return
      <View>
          <Image source={require("../images/blue.jpg")} > 
          <View style = {{marginTop:170, marginRight: 50 ,marginLeft: 90}}>
          
              <Text style={{fontWeight: "bold", marginBottom: 30,fontSize:20,color:"white"}}> Sign In </Text>
              <Text style={{fontWeight: "bold",fontSize:13,color:"white"}}>Orgenization name:</Text>
          <TextInput 
              style={{height: 50, width: 200 ,alignItems: 'center'}}
              returnKeyType='next'
              placeholder="Enter Yuor Username"
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
            />
          <Text style={{fontWeight: "bold",fontSize:13,color:"white"}}>Password:</Text>
          <TextInput
              returnKeyType='go'
              style={{height: 50, width: 200,alignItems: 'center'}}
              placeholder="Enter Your Password"
              secureTextEntry = {true}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
            />
        <View style={{marginLeft: 10,marginRight: 140}}>
        <Button title = "submit" onPress = {this.submitSignIn.bind(this)}/>
        </View>
        <View style={{marginLeft: 10,marginRight: 140}}>
        <Text>{'\n'}{'\n'}</Text>
       <Button title = "BACK" style = {{marginTop:100}} onPress = {() => this.props.show("showSignIn")}/>
        </View>
       
        </View>
        </Image>
      </View>
    }
}


    render() {
        return (
            <View>
                {this.goToProfile()}
            </View>
        );
    }
}