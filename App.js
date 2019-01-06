import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button
} from 'native-base';
import Login from './Login';
import Signup from './Signup';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: { username: '', password: '' },
      showSignUp: false
    };
  }
  signUpFunction() {
    this.setState({ showSignUp: true });
  }

  render() {
    // if (this.state.isLogined) {
    //   return (
    //     <Container>
    //       <Header />
    //       <Content>
    //         <Form>
    //           <Item>
    //             <Input placeholder="Username" />
    //           </Item>
    //           <Item last>
    //             <Input placeholder="Password" />
    //           </Item>
    //         </Form>
    //         <Button
    //           style={{
    //             height: 50,
    //             width: 320,
    //             justifyContent: 'center',
    //             padding: 10,
    //             margin: 20
    //           }}
    //         >
    //           <Text style={{ justifyContent: 'center' }}>Sign In</Text>
    //         </Button>
    //         <Text
    //           style={{
    //             justifyContent: 'flex-end',
    //             textDecorationLine: 'underline',
    //             textAlign: 'right'
    //           }}
    //         >
    //           Create new account?
    //         </Text>
    //       </Content>
    //     </Container>
    //   );
    // } else {
    if (!this.state.showSignUp) {
      return <Login signUpFunction={this.signUpFunction.bind(this)} />;
    } else {
      return <Signup />;
    }
    // }
  }
}
