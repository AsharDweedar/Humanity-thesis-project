import React from "react";
import { Text, View, TextInput, KeyboardAvoidingView,StyleSheet, Button,Image} from "react-native";
import LogInUsers from "./logInUsers";
import conf from "../config"
                
export default class UserSignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            signedUp: false
        };
    }


onSignUp () {
   fetch(conf.url + '/users/signup', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: this.state.username,
    email: this.state.email,
    age: this.state.age,
    password:this.state.password
  })
}) .then((response) => console.log(response))
      .then((data) => {
        this.props.show("showSignInUser");
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
          <View style = {{marginTop:50, marginRight: 50 ,marginLeft: 90}}>
   
      <Text style={{fontWeight: "bold", marginBottom: 30,fontSize:20,color:"white"}}> Sign Up </Text>
    
   
      <Text style={{fontWeight: "bold",fontSize:13,color:"white"}}>Username:</Text>
      <TextInput
          style={{height: 50, width: 200 }}
          placeholder="Enter Username"
          returnKeyType = "next"
          onChangeText={(username) => this.setState({username})}
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
        <Text style={{fontWeight: "bold",fontSize:13,color:"white"}}>Age:</Text>
        <TextInput
          style={{height: 50, width: 200}}
          placeholder="Enter Age"
          returnKeyType = "next"
        
          autoCapitalize = "none"
          onChangeText={(age) => this.setState({age})}
          />
        <Text style={{fontWeight: "bold",fontSize:13,color:"white"}}>Password:</Text>
        <TextInput
          style={{height: 50, width: 200}}
          placeholder="Enter Password"
          returnKeyType = "go"
          secureTextEntry = {true}
          onChangeText={(password) => this.setState({password})}
          />
   
        <View style={{marginLeft: 10,marginRight: 140}}>
        <Button title = "submit" onPress = {this.onSignUp.bind(this)} />
            </View>
            <View style={{marginLeft: 10,marginRight: 140}}>
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
