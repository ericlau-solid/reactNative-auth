import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Spinner from 'react-native-loading-spinner-overlay';
import { Button, Header, CardSection } from './components/common';
import LoginForm from './components/loginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDNirmyZ5wR0dnpe0gUR7SdQ6bXQwaDlrg',
      authDomain: 'auth-ad487.firebaseapp.com',
      databaseURL: 'https://auth-ad487.firebaseio.com',
      projectId: 'auth-ad487',
      storageBucket: 'auth-ad487.appspot.com',
      messagingSenderId: '564873133780',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true: {
        return (
          <Button>Logout</Button>
        );
      }
      case false: {
        return <LoginForm />;
      }
      default: {
        return (
          <View style={{ flex: 1, }}>
            <Spinner 
              visible textContent={'Loading...'} 
              textStyle={{ color: '#FFF' }}
            />
          </View>
        );
      }
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <CardSection>
          {this.renderContent()}
        </CardSection>
      </View>
    );
  }
}

export default App;
