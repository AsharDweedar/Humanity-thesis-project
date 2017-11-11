import React from "react";
import { Text, View, TextInput, KeyboardAvoidingView, Button, ScrollView, StyleSheet, Dimensions} from "react-native";
                

export default class Createevents extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "",
            description: "",
            location: "",
            time: "",
            duration:"",
            agelimit:"",
            volunteers:"",
            created:false,
            ShowOrgprofile:false
        };
    }

    create () {
        fetch("https://thawing-garden-23809.herokuapp.com/events/create", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: this.state.name,
                description: this.state.description,
                location:this.state.location,
                time:this.state.time,
                agelimit:this.state.agelimit,
                duration :this.state.duration,
                volunteers:this.state.volunteers
            })
        }) .then((response) => console.log(response))
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    myFunctions(){
        this.create();
        this.props.showProfile();
        this.setState({created: true});
        this.setState({ShowOrgprofile: true});
    }

    goCreate () {
        
            return <View style = {{alignItems: "center", marginTop: 10}}>
        
                <Text style = {{fontWeight:"bold"}}>Event Name:</Text>
                <TextInput
                    style={{height: 50, width: 200 }}
                    placeholder="Enter eventname"
                    returnKeyType = "next"
                    onChangeText={(name) => this.setState({name})}
                />
                <Text style = {{fontWeight:"bold"}}>Description:</Text>
                <TextInput
                    style={{height: 50, width: 200}}
                    placeholder="desctiption"
                    returnKeyType = "next"
                    
                    onChangeText={(desctiption) => this.setState({desctiption})}
                />
                <Text style = {{fontWeight:"bold"}}>Location:</Text>
                <TextInput
                    style={{height: 50, width: 200}}
                    placeholder="location"
                    returnKeyType = "next"
                    
                    onChangeText={(location) => this.setState({location})}
                />
                <Text style = {{fontWeight:"bold"}}>Time:</Text>
                <TextInput
                    style={{height: 50, width: 200}}
                    placeholder="time"
                    returnKeyType = "next"
                    
                    onChangeText={(time) => this.setState({time})}
                />
                <Text style = {{fontWeight:"bold"}}>Age Limit:</Text>
                <TextInput
                    style={{height: 50, width: 200}}
                    placeholder="agelimit"
                    returnKeyType = "next"
                    
                    onChangeText={(agelimit) => this.setState({agelimit})}
                />
                <Text style = {{fontWeight:"bold"}}>Max Number of Volunteers:</Text>
                <TextInput
                    style={{height: 50, width: 200}}
                    placeholder="volunteers"
                    returnKeyType = "go"
                    
                    onChangeText={(volunteers) => this.setState({volunteers})}
                />
                <View style = {{marginTop: 10}}>
                <Button title = "submit" onPress = {this.myFunctions.bind(this)} />
                </View>
            </View>;
        }
    




    render() {
        return (
            <View>
                {this.goCreate()}
            </View>
            
        );
    }
}




