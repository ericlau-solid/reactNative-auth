import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  state = { text: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <TextInput 
            style={{ height: 40, flex: 1 }} 
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        </CardSection>
        <CardSection />
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
