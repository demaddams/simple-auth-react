import React, { Component } from 'react';

import { AsyncStorage } from 'react-native';
import Login from './Login';
import Home from './Home';

export default class Main extends Component {
    
  state = {
    isLoggedIn: false,
    user:null
  }

  
_getUser = async () =>{
    try {
        let userData = await AsyncStorage.getItem("user");
        let data = JSON.parse(userData);
        this.setState({isLoggedIn: true})
        this.setState({user :data})
      } catch (error) {
        console.log("Something went wrong", error);
      }
}

onLogout = async () =>{
    try {
        AsyncStorage.removeItem('user');
        this.setState({isLoggedIn: false})
      } catch (error) {
        console.log("Something went wrong", error);
      }
}

onLoginPress =  () =>{
    this.setState({isLoggedIn: true})
}

  componentDidMount(){
    this._getUser()
    
  }
  render() {
    if (this.state.isLoggedIn && this.state.user) 
      return <Home 
          onLogoutPress={() => this.onLogout()}
        />;
    else 
      return <Login 
          onLoginPress={() => this.onLoginPress()}
        />;
  }

}