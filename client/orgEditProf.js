import React from "react";
import { Text, View, TextInput, Button,Image} from "react-native";
import conf from "../config"
                
export default class OrgEditProf extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      description : "",
      submitEdite : false ,
      data : {}
    };
  }

  onUpdate () {
    fetch(conf.url + '/orgs/editprofile', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        description: this.state.description,
        password:this.state.password
      })
    })
      .then((response) => response.json())
      .then(({data}) => {
        this.setState({data: data})
        this.setState({submitEdite:true});
       console.log(data);
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

    return (
     <View>
      <View style = {{alignItems: "center", marginTop:20}}>
          <Text style={{fontWeight: "bold", marginBottom: 30,fontSize:20}}> 
 Update Profile</Text>
      
     <Text style={{fontWeight: "bold",fontSize:13}}>Update Name:</Text>
      <TextInput
        style={{height: 50, width: 200 }}
        placeholder="Enter New Name"
        returnKeyType = "next"
        onChangeText={(name) => this.setState({name})}
      />
      <Text style={{fontWeight: "bold",fontSize:13}}>Update Email:</Text>
      <TextInput
        style={{height: 50, width: 200}}
        placeholder="Enter New Email"
        returnKeyType = "next"
        keyboardType = "email-address"
        autoCapitalize = "none"
        onChangeText={(email) => this.setState({email})}
      />
      <Text style={{fontWeight: "bold",fontSize:13}}>Update Password:</Text>
      <TextInput
        style={{height: 50, width: 200}}
        placeholder="Enter New Password"
        returnKeyType = "go"
        secureTextEntry = {true}
        onChangeText={(password) => this.setState({password})}
      />
      <Text style={{fontWeight: "bold",fontSize:13}}>Update Description:</Text>
      <TextInput
        style={{height: 50, width: 200}}
        placeholder="Enter New Description"
        returnKeyType = "go"
        secureTextEntry = {true}
        onChangeText={(description) => this.setState({description})}
      />
       <View style={{alignItems:"center", marginTop:20}}>
      <Button title = "submit" onPress = {this.onUpdate.bind(this)} />
    </View>
          </View>
          </View>
    );
  }
}
