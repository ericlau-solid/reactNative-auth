import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/loginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDNirmyZ5wR0dnpe0gUR7SdQ6bXQwaDlrg',
      authDomain: 'auth-ad487.firebaseapp.com',
      databaseURL: 'https://auth-ad487.firebaseio.com',
      projectId: 'auth-ad487',
      storageBucket: 'auth-ad487.appspot.com',
      messagingSenderId: '564873133780',
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
