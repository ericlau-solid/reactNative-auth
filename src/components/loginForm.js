import React, { Component } from 'react';
import { Button, Card, CardSection, TextField } from './common';

class LoginForm extends Component {
  state = { 
    email: '',
    password: '',
  };

  render() {
    return (
      <Card>
        <CardSection>
          <TextField 
            autoCorrect={false}
            placeholder="user@gmail.com"
            label="Email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </CardSection>
        <CardSection>
          <TextField 
            autoCorrect={false}
            secureTextEntry
            placeholder="password"
            label="Password"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </CardSection>
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
