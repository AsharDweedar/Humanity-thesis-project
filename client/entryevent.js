
import React from 'react';

import { Text, View, TouchableOpacity} from 'react-native';
import EventPage from './EventPage'
import EventPageOrg from './EventPageOrg'

export default class Entryevent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: props.tag
    };
    
  }

  showCurrent(){
    if (this.state.tag === "org") {
      return  this.props.showEventPageOrg(this.props.event);
    } else if (this.state.tag === "user") {
      return this.props.showEventPage(this.props.event, "myEvents"); 
    } else if (this.state.tag === "allEvents") {
      return this.props.showEventPage(this.props.event , "allEvents");
    } else {
      return null;
    }
  }  
  render() {
    return(
      <View style = {{marginLeft:50,marginTop:30}}>
          <TouchableOpacity onPress={this.showCurrent.bind(this)}>
            <Text style={{fontSize:20,color:'white', marginBottom:10}}>{this.props.event.name}</Text>
          </TouchableOpacity> 
           <Text style={{color:'white'}}>Click here to view details</Text>
       </View>    
    )
  }
}
