import React from 'react';
import { Text, View, Alert, TouchableOpacity, StyleSheet, Image,Button, FlatList} from 'react-native';
import conf from '../config.js';
export default class EventPageOrg extends React.Component {
  constructor(props) {
    super(props); 
        this.state = {
          event: props.event,
          tag: props.tag,
          deleted:false,
          showUsers:false,
          data:[
            {
              age: 22,
              createdAt: "2017-11-08T09:48:39.000Z",
              email: "anas@humanity",
              id: 1,
              image:'https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/boy-512.png',
              password: "$2a$10$zD2lyxGXD6QBVSxBR2BFPuUwjHhJPyMWWGemaGJrwkX8lpm3xT0rS",
              rate: null,
              updatedAt: "2017-11-08T09:48:39.000Z",
              username: "anas",
            },
            {
              age: 22,
              createdAt: "2017-11-08T09:48:39.000Z",
              email: "ammar@mm",
              id: 1,
              image:'https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/boy-512.png',
              password: "$2a$10$zD2lyxGXD6QBVSxBR2BFPuUwjHhJPyMWWGemaGJrwkX8lpm3xT0rS",
              rate: null,
              updatedAt: "2017-11-08T09:48:39.000Z",
              username: "Ammar",
            }
          ]
        };
  }

  delete() {
      fetch(conf.url + '/events/deleteevent', {
      method: 'DELETE',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  },
      body: JSON.stringify({
      id: this.state.event.id
    })
    })
 .then((response) => response.json())
      .then((data) => {
       console.log(data)
       console.log(this.state.tag)
      this.setState({deleted : true})
       Alert.alert( 'DELETE ', data.message, [{text: 'OK', onPress: () => this.props.showMyEvents()}], { cancelable: true } )
      })
      .catch((error) => {
        console.error(error);
      });
  }

  toggleVolunteers (){
    this.setState({showUsers:!this.state.showUsers});
  }


  render() {
    

    if (!this.state.deleted && !this.state.showUsers) { 
      return ( <View>
       <Image source={require("../images/blue.jpg")} >
        <Text style = {{marginLeft: 15, marginTop:20, color: "white", fontSize:20}}>{this.state.event.name}</Text>
        <Text style = {{marginLeft: 15, marginTop:20, color: "white", fontSize:20}}>{this.state.event.description}</Text>
        <Text style = {{marginLeft: 15, marginTop:20, color: "white", fontSize:20}}>{this.state.event.location}</Text>
        <Text style = {{marginLeft: 15, marginTop:20, color: "white", fontSize:20}}>{this.state.event.time}</Text> 
        <View style = {{flexDirection:'row', marginTop: 50,marginLeft:30}}>
        <Button title="Delete Event" onPress = {this.delete.bind(this)} />
        <Text>      </Text>
        <Button title="Show Volunteers" onPress = {this.toggleVolunteers.bind(this)} />
        </View>
        </Image>
     </View> )
    } else if(!this.state.deleted && this.state.showUsers) {
      return (
        <View>
       <Image source={require("../images/blue.jpg")} >
        <Text style = {{marginLeft: 15, marginTop:20, color: "white", fontSize : 15}} >{this.state.event.name}</Text>
        <Text style = {{marginLeft: 15, marginTop:10, color: "white", fontSize : 15}} >{this.state.event.description}</Text>
        <Text style = {{marginLeft: 15, marginTop:10, color: "white", fontSize : 15}} >{this.state.event.location}</Text>
        <Text style = {{marginLeft: 15, marginTop:10, color: "white", fontSize : 15}} >{this.state.event.time}</Text>
        
        <View style = {{flexDirection:'row', marginTop: 35,marginLeft:30}}>
          <Button title="Hide Volunteers" onPress = {this.toggleVolunteers.bind(this)} />
          <Text>      </Text>
          <Button title="Delete Event" onPress = {this.delete.bind(this)} />
          <Text>      </Text>
        </View>
        
    <View style= {{ alignItems:"center",borderColor: 'black',marginTop: 30, borderRadius: 2,backgroundColor: '#87cefa',marginRight:120}}>
       <Text style = {{marginTop: 20}}>Volunteers {'\n'}{'\n'}</Text>
      </View>

        <FlatList
            data ={this.state.event.users}
            renderItem ={({item}) =>  <TouchableOpacity onPress = {() => {this.props.showUserProfile(item)}} style = {{marginLeft: 15, marginTop:20, fontSize : 15}}><Text style={{color: "white"}}>{item.username}</Text></TouchableOpacity>
            }
           >
        </FlatList>
        </Image>
     </View>

        )
    } else {
      return null;
    }
  }

}