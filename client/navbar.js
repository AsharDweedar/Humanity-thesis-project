
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image, ScrollView} from 'react-native';

import conf from '../config.js'

import UserProfile from './userprofile';
import OrgProfile from './orgprofile';
import List from './list';
import Createevents from './createevents';
import OrgEditProf from './orgEditProf';
import UserEditProf from './userEditProf';
import EventPage from './EventPage';
import EventPageOrg from './EventPageOrg';
import UserProfileAsOrg from './UserProfileAsOrg';
import EventsBy from './EventsBy';

// const SideMenu = require('react-native-side-menu');

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.out = props.signOut ;
    this.state = {
     profile: props.profile ,
     user: props.profile == "user",
     org: props.profile == "org" ,
     info: props.info,
     myEvents: props.info.events,
     UserProfileAsOrg: {},
     allEvents: [],
     currentEvent: {},
     currentEventTag : "",  
     showEditProfile:false,    //edit profile 
     showUserProfileAsOrg:false,    //show User Profile As Org
     showCreateEvent:false,    //create event
     showMyEvents:false,       //my events
     showProfile: true,        //profile
     showEvents:false,         //all events
     showEventPage : false,    //event page
     showEventPageOrg : false, //event page org
     showEventsBy : false, //event page org
     current: "showProfile" 
    };
    console.log(this.state.user);
  }

  showEventPage(ev, tag){
    this.state[this.state.current] = false ;
    this.setState({current : "showEventPage"});
    this.setState({showEventPage : true});
    this.setState({currentEvent : ev});
    this.setState({currentEventTag : tag});
  }
  showEventPageOrg(ev){
    this.state[this.state.current] = false ;
    this.setState({current : "showEventPageOrg"});
    this.setState({showEventPageOrg : true});
    this.setState({currentEvent : ev});
  }

  showEditProfile(){
    this.state[this.state.current] = false ;
    this.setState({current : "showEditProfile"});
    this.setState({showEditProfile : true});
  }

  showCreateEvent(){
    this.state[this.state.current] = false ;
    this.setState({current : "showCreateEvent"});
    this.setState({showCreateEvent : true});
  }

  showMyEvents () {
    this.state[this.state.current] = false ;
    this.setState({current : "showMyEvents"});
    this.setState({showMyEvents : true});
  }
  showEventsBy () {
    this.state[this.state.current] = false ;
    this.setState({current : "showEventsBy"});
    this.setState({showEventsBy : true});
  }

  showUserProfileAsOrg (user) {
    this.state[this.state.current] = false ;
    this.setState({UserProfileAsOrg : user});
    this.setState({current : "showUserProfileAsOrg"});
    this.setState({showUserProfileAsOrg : true});
  }

  showProfile (prop) {
    if (prop) {
      this.setState({information : prop});
      if (prop.events) this.setState({myEvents :prop.events});
    }
    this.state[this.state.current] = false ;
    this.setState({current : "showProfile"});
    this.setState({showProfile : true});
  }

  showEvents (evs) {
    if (evs && evs.length) {
      this.setState({allEvents: evs})
      this.state[this.state.current] = false ;
      this.setState({current : "showEvents"});
      this.setState({showEvents : true});
      return ;
    }
    console.log('showEvents')
    fetch(conf.url + '/events',{method:'GET'})
    .then((response) => response.json())
    .then((data) => {
      console.log('-All Events---------------->')
      console.log(data) 
        this.setState({allEvents: data})
        this.state[this.state.current] = false ;
        this.setState({current : "showEvents"});
        this.setState({showEvents : true});
    })
    .catch((error) => {
      console.error(error);
     });
  }

  logout () {
    this.out();
    if (this.state.user) {
      fetch(conf.url + '/users/signout',
        {method:'GET'})
    }
    
    if (this.state.org) {
      fetch(conf.url + '/orgs/signout',
        {method:'GET'})
    }
  }
  
  show () {
    //profile
    if (this.state.showProfile) {
      if (this.state.org) {
        return <OrgProfile information = {this.state.info} tag = "orgEvents" showEditProfile={this.showEditProfile.bind(this)} showMyEvents={this.showMyEvents.bind(this)}/>
      } else {
        return <UserProfile information = {this.state.info} tag = "myEvents" showEditProfile={this.showEditProfile.bind(this)} showMyEvents={this.showMyEvents.bind(this)} />
      } 
    //all events => only user
    } else if (this.state.showEvents){
      return <List events = {this.state.allEvents} showEventPage = {this.showEventPage.bind(this)} showEventPageOrg = {this.showEventPageOrg.bind(this)}  tag = "allEvents"/>
    //my events =< org and user
    } else if (this.state.showMyEvents){
      return <List events = {this.state.myEvents} showEventPage = {this.showEventPage.bind(this)}  showEventPageOrg = {this.showEventPageOrg.bind(this)} tag = {this.state.profile} /> //something to show my events
    // edit profile 
    } else if (this.state.showEditProfile) {
      if (this.state.user) {
        return <UserEditProf showProfile = {this.showProfile.bind(this)} />
      } else if (this.state.org) {
        return <OrgEditProf showProfile = {this.showProfile.bind(this)} />
      }
    //create event => org 
    } else if (this.state.showCreateEvent) {
      return <Createevents showProfile = {this.showProfile.bind(this)}/>;
    } else if (this.state.showEventPageOrg) {
      return <EventPageOrg event = {this.state.currentEvent} showMyEvents = {this.showMyEvents.bind(this)} showUserProfile = {this.showUserProfileAsOrg.bind(this)} />;
    } else if (this.state.showEventPage) {
      return <EventPage event = {this.state.currentEvent} showEvents = {this.showEvents.bind(this)} showMyEvents = {this.showMyEvents.bind(this)} tag = {this.state.currentEventTag} />;
    } else if (this.state.showUserProfileAsOrg) {
      return <UserProfileAsOrg information = {this.state.UserProfileAsOrg} />;
    } else if (this.state.showEventsBy) {
      return <EventsBy showEvents = {this.showEvents.bind(this)}/>;
    } else  {
      return null;
    } 
  }


   render() {
    if (this.state.user) {
      return (
        <View>
          <View
            style={{flexDirection: 'row',
              borderColor: 'black',
              borderRadius: 2,
              backgroundColor: '#00bfff'}}
          >
          <Text>         </Text>
          <TouchableOpacity style = {{marginTop: 30,alignItems:'center'}} onPress = {this.showProfile.bind(this)}>
            <Text>PROFILE</Text>
          </TouchableOpacity>
          <Text>                  </Text>
          <TouchableOpacity style = {{marginTop: 30}} onPress = {this.showEventsBy.bind(this)}>
                    <Text>FIND EVENTS</Text>
                  </TouchableOpacity>
                  <Text>               </Text>
          <TouchableOpacity style = {{marginTop: 30}} onPress = {() => {this.logout.bind(this)()}}>
            <Text>LOGOUT {'\n'}{'\n'}</Text>
          </TouchableOpacity>
        </View>
        <View>{this.show()}</View>
      </View>

      )
    } else if (this.state.org) {
      return (
        <View>
          <View
            style={{flexDirection: 'row',
              borderColor: 'black',
              borderRadius: 2,
              backgroundColor: '#00bfff'}}
          >
          <Text>         </Text>
          <TouchableOpacity style = {{marginTop: 30,alignItems:'center'}} onPress = {this.showProfile.bind(this)}>
            <Text>PROFILE</Text>
          </TouchableOpacity>
          <Text>                </Text>
          <TouchableOpacity style = {{marginTop: 30}} onPress = {this.showCreateEvent.bind(this)}>
                    <Text>CREATE EVENT</Text>
                  </TouchableOpacity>
                  <Text>             </Text>
          <TouchableOpacity style = {{marginTop: 30}} onPress = {() => {this.logout.bind(this)()}}>
            <Text>LOGOUT {'\n'}{'\n'}</Text>
          </TouchableOpacity>
        </View>
        <View>{this.show()}</View>
      </View>

      )
    } else {
      return null
    }
  }
}
        
