import React from 'react';
import conf from './config.js';
import { StyleSheet, Text, View, AppRegistry, Image, KeyboardAvoidingView, TouchableOpacity, Dimensions, Button} from 'react-native';

import SignUp from './client/signUp';
import OrgSignUp from './client/orgSignUp';
import UserSignUp from './client/userSignUp';

import SignIn from './client/signIn';
import SignInOrg from './client/SignInOrg';
import LogInUsers from './client/logInUsers';

export default class App extends React.Component {
 constructor() {
   super();
   this.state = {
     showSignIn: false,
     showSignInOrg: false,
     showSignInUser: false,

     showSignUp: false,
     showSignUpOrg: false,
     showSignUpUser: false,
     
     current: "showMain",

      showMain: true,
      isLogged: false,
      type:"",
      info: {}
    };
    // const width = Dimensions.get('window').width
    // const height = Dimensions.get('window').height
  }
  show  (toShow)  {
    this.state[this.state.current] = false ;
    this.state[toShow] =  true ;
    this.setState({current : toShow});
    
  }; 

  // isLoggedIn () {
  //   fetch(conf.url + '/isLoggedIn',
  //     {method:'GET'})
  //   .then((response) => response.json())
  //     .then((data) => {
  //       console.log('------------------------------------>')
  //       console.log(data)
  //       this.state.isLogged = data.isLoggedIn;
  //       this.state.type = data.type
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //    });
  // }

  main() {
 
  const mainComponent =  
        <View style={{marginTop: 30, marginLeft:70,marginRight:50, alignContent:"center"}} >
        <Image source={require('./images/200x200-icon-drop.png')} style={{marginTop: 30, marginLeft:10}}/>
   
        <Text style={{fontSize:18,marginTop:20,fontStyle:'italic', marginLeft:10}}>
         “One Love, One Heart, One Destiny.”{'\n'}-B.M.</Text>
       <Text style={{fontSize:18,marginTop:20,fontStyle:'italic', marginLeft:10}}>Join Us To Help Make the World a Better Place{'\n'}{'\n'}</Text>
       <View style={{marginRight:15}}>
        <Button title="Sign In" onPress={() => this.show("showSignIn")} />
        <Text>{'\n'}</Text>
        <Button title="Sign Up" onPress={() => this.show("showSignUp")} />
        </View> 
     </View>


 if (this.state.showMain) {
   return mainComponent;
 } else if (this.state.showSignIn) {
   return <SignIn show = {this.show.bind(this)} />;
 } else if (this.state.showSignInUser) {
   return <LogInUsers show = {this.show.bind(this)} />;
 } else if (this.state.showSignInOrg) {
   return <SignInOrg show = {this.show.bind(this)} />;
 } else if(this.state.showSignUp) {
   return <SignUp show = {this.show.bind(this)} />;
 } else if(this.state.showSignUpOrg) {
   return <OrgSignUp show = {this.show.bind(this)} />;
 } else if(this.state.showSignUpUser) {
   return <UserSignUp show = {this.show.bind(this)} />;
 } else {
   return  null;
 }
}

 render() {
   return (
     <View>
      {this.main()}
     </View>
   );
 }
}

AppRegistry.registerComponent('App', () => App);