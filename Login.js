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

export default class Login extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
          <Button style={{ width: 320, justifyContent: 'center', margin: 20 }}>
            <Text style={{ justifyContent: 'center' }}>Sign In</Text>
          </Button>
          <Button
            style={{
              width: 360,
              backgroundColor: 'white',
              justifyContent: 'flex-end'
            }}
            onPress={this.props.signUpFunction.bind(this)}
          >
            <Text
              style={{
                textDecorationLine: 'underline'
              }}
            >
              Create new account?
            </Text>
          </Button>
        </Content>
      </Container>
    );
    // return (
    //   <Form>
    //     <Item fixedLabel>
    //       <Label>Username</Label>
    //       <Input />
    //     </Item>
    //     <Item fixedLabel last>
    //       <Label>Password</Label>
    //       <Input />
    //     </Item>
    //     <Button onPress={this.props.loginFunction}>
    //       <Text>Login</Text>
    //     </Button>
    //   </Form>
    // );
  }
}
