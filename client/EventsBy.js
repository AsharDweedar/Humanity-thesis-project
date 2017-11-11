
import React from 'react';
import { StyleSheet, Text, Alert, TextInput, View,TouchableOpacity, Button,Image} from 'react-native';

import conf from '../config.js'
import List from './list';

export default class EventsBy extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events : [],
      after : '',
      before : '',
      location : '',
    };
  }
  submitTime () { 
   fetch(conf.url + '/events/bytime',
    {
      method:'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        after:this.state.after ,
        before:this.state.before
      })
    }) 
    .then((response) => response.json())
    .then((data) => {
      if (data.done && data.events.length) {
        this.props.showEvents(data);
      } else {
        Alert.alert( 'SORRY', data.message, [{text: 'OK', onPress: () => console.log('OK Pressed')}, ], { cancelable: true } )
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }
  submitLocation () { 
     fetch(conf.url + '/events/bylocation',
      {
        method:'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          location:this.state.location ,
        })
      }) 
      .then((response) => response.json())
      .then((data) => {
        if (data.done && data.events.length) {
          this.props.showEvents(data);
        } else {
          Alert.alert( 'SORRY', data.message, [{text: 'OK', onPress: () => console.log('OK Pressed')}, ], { cancelable: true } )
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }

  render() {
      return (
        <View>
          <Image source={require("../images/blue.jpg")} > 
            <View style = {{alignItems: "center", marginRight: 120, marginTop:20}}>
              <Text style={{fontWeight: "bold", marginBottom: 20,fontSize:20,color:"white"}}> Submit Time </Text>
              <Text style={{fontWeight: "bold",fontSize:13,color:"white"}}>After:</Text>
              <TextInput 
                style={{height: 50, width: 200 ,alignItems: 'center'}}
                returnKeyType='next'
                placeholder="Format : yyyy-mm-dd hh:mm"
                onChangeText={(after) => this.setState({after})}
                value={this.state.after}
              />
              <Text style={{fontWeight: "bold",fontSize:13,color:"white"}}>Before:</Text>
              <TextInput
                returnKeyType='go'
                style={{height: 50, width: 200,alignItems: 'center'}}
                placeholder="Format : yyyy-mm-dd hh:mm"
                secureTextEntry = {true}
                onChangeText={(before) => this.setState({before})}
                value={this.state.before}
              />
              <View style={{marginLeft: 10, marginBottom:10}}>
                <Button title = "submit" onPress = {this.submitTime.bind(this)}/>
              </View>

            
              <Text style={{fontWeight: "bold", marginBottom: 20, marginTop: 20,fontSize:20,color:"white"}}> Submit Location </Text>
              <Text style={{fontWeight: "bold",fontSize:13,color:"white"}}>Location:</Text>
              <TextInput 
                style={{height: 50, width: 200 ,alignItems: 'center'}}
                returnKeyType='next'
                placeholder="location"
                onChangeText={(location) => this.setState({location})}
                value={this.state.location}
              />
              <View style={{marginLeft: 10}}>
                <Button title = "submit" onPress = {this.submitLocation.bind(this)}/>
              </View>
            </View>
        </Image>
      </View>
    );
  }
}
