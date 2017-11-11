import React from "react";
import {StyleSheet, Text, View, Image, Button} from "react-native";
import allStyle from "./style.js";
import OrgEditProf from './orgEditProf';
import conf from '../config.js';
import MyEvents from './myEvents'


export default class Orgprofile extends React.Component {
  constructor(props) {

      super(props)
      this.state= {
        information: props.information,
        editprofile:false,
        showEvents: false,
        tag: props.tag
      }
      fetch(conf.url + '/orgs/orginfo',{
        method:'GET'
      })
       .then((response) => response.json())
       .then((data) => {
        console.log('----------------->.  NEW DATA')
        console.log(data) 
          this.setState({information: data.org})
      })
      .catch((error) => {
          console.error(error);
      });

    this.showEditProfile = () => {
      props.showEditProfile();
    }
      
    this.showMyEvents = () => {
      props.showMyEvents();
    }
  }
    

    render() {
    return (
       <View>
      
      <View style= {{ alignItems:"center",borderColor: 'black', borderRadius: 2,backgroundColor: '#87cefa'}}>
         <Text style = {{marginTop: 20}}>Welcome {this.state.information.name}{'\n'}{'\n'}</Text>
        </View>
        <Image source={require("../images/blue.jpg")} >
        <Text style = {{marginTop: 20, marginLeft: 30,fontSize: 20,
          fontWeight: 'bold',color:'white'}}>Email:</Text>
          <Text style = {{marginTop: 20,fontSize: 18, marginLeft: 50,color:'white' }}>{this.state.information.email}</Text>

          <Text style = {{marginTop: 20, marginLeft: 30,fontSize: 20,
          fontWeight: 'bold',color:'white'}}>Rate:</Text>
          <Text style = {{marginTop: 20,color:'white',fontSize: 18, marginLeft: 50 }}>5</Text>

          <Text style = {{marginTop: 20, marginLeft: 30,fontSize: 20,
          fontWeight: 'bold',color:'white'}}>Phone Number:</Text>
          <Text style = {{marginTop: 20,color:'white',fontSize: 18, marginLeft: 50 }}>0798726360</Text>
          <View style = {{flexDirection:'row', marginTop: 50,marginLeft:30}}>
          <Button  style = {{width: 50, height: 70}} title = "Edit Profile" onPress = {this.showEditProfile.bind(this)}/>
          <Text>                          </Text>
          <Button style = {{width: 50, height: 70}} title = "My Events" onPress = {this.showMyEvents.bind(this)}/>
          </View>
         </Image>
                           

        </View>
    );
  }

}