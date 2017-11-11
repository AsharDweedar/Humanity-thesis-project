import React from "react";
import { Text, View, TouchableOpacity, Button, KeyboardAvoidingView,StyleSheet,Image} from "react-native";

export default class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            showUser: false,
            mainComp: true,
            showOrg: false
        };
    }


    SignUp () {
        this.setState({showUser: true, showOrg: false, mainComp: false});
    }
    Sign() {
        this.setState({showOrg: true, showUser: false, mainComp: false});
    }


    render() {
        return (

            <KeyboardAvoidingView behavior = 'padding'>
                <View>
            <Image source={require("../images/blue.jpg")} >  
            <View style = {styles.textcontaniar}> 
            <Text style={{color:'white', marginBottom:80, fontSize:17,textAlign:'center'}}>Please Select User If You Want To Volunteer{'\n'}Or Org If You Want To Create And Manage Your Events</Text>
                <TouchableOpacity onPress = {() => this.props.show("showSignUpUser") }>
                <Text style = {styles.con}>USER </Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.textcontaniar}>
                <TouchableOpacity onPress = {() => this.props.show("showSignUpOrg")} >
                <Text style = {styles.con}> ORG </Text>
                </TouchableOpacity>
            </View>
            <View style={{marginLeft: 115,marginRight:240}}>
                <Text>{'\n'}{'\n'}</Text>
       <Button title = "BACK " style = {{marginTop:100}} onPress = {() => this.props.show("showMain")}/>
       </View>
            </Image>
        
        
       </View>
            </KeyboardAvoidingView>
    

    );
  }
}
const styles = StyleSheet.create({
    con:{
   
  textAlign:'center',
   justifyContent: 'center',
    color:'white',
    fontSize:30,
    fontWeight:'bold',
    fontStyle:'italic'
  },
   textcontaniar:{
     marginTop:100,
     marginLeft:50,
      marginRight:170,
  
   }
});

