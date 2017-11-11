import React from "react";
import {View, StyleSheet, Text ,TouchableOpacity, TouchableHighlight, Image} from 'react-native'
import Entryevent from './entryevent'
import EventPage from './EventPage';
import OrgProfile from './orgprofile';
import conf from '../config.js'

export default class List extends React.Component {

  constructor(props){
    super(props);
    console.log(props);
    console.log('...........list..........');
    if (props.tag === "user" || props.tag === "org")  {
      fetch(`${conf.url}/${props.tag}s/${props.tag}info`,{method:'GET'})
        .then((response) => response.json())
        .then((data) => {
          console.log('------------------------------------>')
          console.log(data) 
          if (Array.isArray(data[props.tag]["events"])) {
            this.setState({events: data[props.tag]["events"]});
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
    this.state = {
      tag: props.tag,
      events: props.events || []
    };
  }
  
  
    render() {
        return(
            <View>
              <Image source={require("../images/blue.jpg")} >
              {this.state.events.map((event, index) => (<Entryevent key = {index} event = {event} showEventPage = {this.props.showEventPage}  showEventPageOrg = {this.props.showEventPageOrg} tag={this.state.tag}/> ))}
              </Image>
         
            </View>       
    )
  }
}
