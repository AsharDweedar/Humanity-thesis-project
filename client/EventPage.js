import React from 'react';
import { Text, View, Alert, TouchableOpacity, StyleSheet, Image,Button} from 'react-native';
import conf from '../config.js';
export default class EventPage extends React.Component {
  constructor(props) {
    super(props); 
        this.state = {
        event: props.event,
        joined:false
        };
  }
  myFunctions(){
      this.onJoin();
      this.setState({joined: true});
  }

  onJoin() {
      fetch(conf.url + '/events/join', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  },
      body: JSON.stringify({
      id: this.state.event.id,
      org_id:this.state.event.org_id
  })
  })
 .then((response) => response.json())
      .then((data) => {
       console.log(data)
       Alert.alert( 'JOIN ', data.message, [{text: 'OK', onPress: () => console.log('OK Pressed')}, ], { cancelable: true } )
      })
      .catch((error) => {
        console.error(error);
      });
}

  render() {
    return(
      <View >
       <Image source={require("../images/blue.jpg")} >
        <TouchableOpacity >
        <Text style={{fontSize:25,color:"white"}}>{this.props.event.name}</Text>
        <Text style={styles.container}>{this.props.event.description}</Text>
        <Text style={styles.container}>{this.props.event.location}</Text>
        <Text style={styles.container}>{this.props.event.time}</Text> 
        <View style = {{ marginTop: 20,marginLeft:30,marginRight:300}}>
          <Button title="join" onPress = {this.myFunctions.bind(this)} /></View>
        </TouchableOpacity> 
        </Image>
      </View>
    )
  }
}
const styles = StyleSheet.create(
   {
        container: {
    
            fontSize:20,
            lineHeight: 24,
            color: "black"
        }
//         container1: {  
//             fontSize: 14,
//             lineHeight: 24,
//             color: "blue"
//         },
//         cont: {
//             backgroundColor:"#99ceff",
//             width:350,
//             marginLeft:0,
//             marginRight:0
     
//         //    justifyContent: 'space-between'
//         }
   });


