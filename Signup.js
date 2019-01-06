import React from 'react';
import { View, Text } from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button
} from 'native-base';
export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: { username: '', password: '', type: 'user' }
    };
  }
  signUpAccount(account) {
    fetch('http://192.168.1.73:3000/accounts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_name: account.username,
        digest_password: account.password,
        type: account.type
      })
    });
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Enter your desired username"
                onChangeText={value =>
                  this.setState({
                    account: { ...this.state.account, username: value }
                  })
                }
                value={this.state.account.username}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Enter your assword"
                onChangeText={value =>
                  this.setState({
                    account: { ...this.state.account, password: value }
                  })
                }
                value={this.state.account.password}
              />
            </Item>
          </Form>
          <Button
            style={{ width: 320, justifyContent: 'center', margin: 20 }}
            onPress={() => {
              this.signUpAccount(this.state.account);
            }}
          >
            <Text style={{ justifyContent: 'center' }}>Sign Up</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
