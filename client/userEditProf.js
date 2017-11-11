import React from "react";
import { Text, View, TextInput, Button,Image} from "react-native";
import conf from "../config";
import UserProfile from './userprofile';

                
export default class UserEditProf extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      age:"",
      password: "",
      submitEdite : false ,
      data : {} 
    };
  }

  onUpdate () {
    fetch(conf.url + '/users/editprofile', {
      method: 'PUT',
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
    })
      .then((response) => response.json())
      .then((res) => {
       console.log(res);
       this.setState({data: res.data})
       this.setState({submitEdite:true});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.submitEdite) {
      this.props.showProfile(this.state.data);
      return null;
    }

    const editprofile = <View>
      <Image source={require("../images/blue.jpg")} > 
      <View style = {{alignItems: "center", marginRight: 120, marginTop: 40}}>
          <Text style={{fontWeight: "bold", marginBottom: 30,fontSize:20,color:"white"}}> 

       Update Profile</Text>
      
      <Text style={{fontWeight: "bold",fontSize:13,color:"white"}}>Update Username:</Text>
      <TextInput
        style={{height: 50, width: 200 }}
        placeholder="Enter New Username"
        returnKeyType = "next"
        onChangeText={(username) => this.setState({username})}
      />
      <Text style={{fontWeight: "bold",fontSize:13,color:"white"}}>Update Email:</Text>
      <TextInput
        style={{height: 50, width: 200}}
        placeholder="Enter New Email"
        returnKeyType = "next"
        keyboardType = "email-address"
        autoCapitalize = "none"
        onChangeText={(email) => this.setState({email})}
      />
      <Text style={{fontWeight: "bold",fontSize:13,color:"white"}}>Update Age:</Text>
       <TextInput
        style={{height: 50, width: 200}}
        placeholder="Enter New Age"
        returnKeyType = "next"
        autoCapitalize = "none"
        onChangeText={(age) => this.setState({age})}
      />
      <Text style={{fontWeight: "bold",fontSize:13,color:"white"}}>Update Password:</Text>
      <TextInput
        style={{height: 50, width: 200}}
        placeholder="Enter New Password"
        returnKeyType = "go"
        secureTextEntry = {true}
        onChangeText={(password) => this.setState({password})}
      />
       <View style={{marginTop: 20}}>
      <Button title = "submit" onPress = {this.onUpdate.bind(this)} />
      </View>
          </View>
          </Image>
          </View>

    return editprofile;
  }  
    
  }
