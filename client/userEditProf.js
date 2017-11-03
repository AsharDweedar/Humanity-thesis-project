import React from "react";
import { Text, View, TextInput, Button} from "react-native";
import conf from "../config"
                
export default class UserEditProf extends React.Component {
  constructor (props) {
    super(props);
    this.propsFunc = Object.keys(props)[0];
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  onUpdate () {
    fetch(conf.url + 'users/editprofile', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password:this.state.password
      })
    })
      .then((response) => console.log(response))
      .then(({data}) => {
       console.log(data)
        // call the function from the navbar here ....
        propsFunc(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style = {{marginTop:200, alignItems: "center" }}>
      <Text style={{fontWeight: "bold", textAlign: 'center', marginBottom: 10}}> update my profile data </Text>
      
      <Text style = {{marginRight:130}}>Update Username:</Text>
      <TextInput
        style={{height: 50, width: 200 }}
        placeholder="Enter New Username"
        returnKeyType = "next"
        onChangeText={(username) => this.setState({username})}
      />
      <Text style = {{marginRight:160}}>Update Email:</Text>
      <TextInput
        style={{height: 50, width: 200}}
        placeholder="Enter New Email"
        returnKeyType = "next"
        keyboardType = "email-address"
        autoCapitalize = "none"
        onChangeText={(email) => this.setState({email})}
      />
      <Text style = {{marginRight:130}}>Update Password:</Text>
      <TextInput
        style={{height: 50, width: 200}}
        placeholder="Enter New Password"
        returnKeyType = "go"
        secureTextEntry = {true}
        onChangeText={(password) => this.setState({password})}
      />
      <Button title = "submit" onPress = {this.onUpdate.bind(this)} />
    </View>
    );
  }
}
