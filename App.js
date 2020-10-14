/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React from 'react';
import Login from './src/components/login';
import Welcome from './src/components/welcome';
import SignUp from './src/components/signup';
import SignUpStep from './src/components/signupstep';
import LoginInfo from './src/components/logininfo';
import Home from './src/components/home';
import Contact from './src/components/contact';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="welcome">
          <Stack.Screen
            name="welcome"
            component={Welcome}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{title: 'Login'}}
          />
          <Stack.Screen
            name="signup"
            component={SignUp}
            options={{title: 'Sign up'}}
          />
          <Stack.Screen
            name="logininfo"
            component={LoginInfo}
            options={{title: 'Login info'}}
          />
          <Stack.Screen
            name="signupstep"
            component={SignUpStep}
            options={{title: 'Sign up'}}
          />
          <Stack.Screen
            name="home"
            component={Home}
            options={{title: 'Home'}}
          />
          <Stack.Screen
            name="contact"
            component={Contact}
            options={{title: 'Contact'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
