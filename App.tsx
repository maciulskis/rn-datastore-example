import React from 'react';
import awsconfig from './aws-exports';
import Amplify from '@aws-amplify/core';
import {Auth} from '@aws-amplify/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from './src/screens/HomeScreen';
import {LoginScreen} from './src/screens/LoginScreen';
import {SignupScreen} from './src/screens/SignupScreen';
import {ConfirmSignupScreen} from './src/screens/ConfirmSignup';
import {RecordScreen} from './src/screens/Record';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);
Amplify.Logger.LOG_LEVEL = 'DEBUG';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Signup: undefined;
  ConfirmSignup: undefined;
  Record: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ConfirmSignup" component={ConfirmSignupScreen} />
        <Stack.Screen name="Record" component={RecordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
