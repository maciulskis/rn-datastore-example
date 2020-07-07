import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Auth} from '@aws-amplify/auth';

import {RootStackParamList} from '../../App';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const [loginState, setLoginState] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        await Auth.currentAuthenticatedUser();
        setLoginState(true);
      } catch (err) {
        setLoginState(false);
        console.log(err);
      }
    };

    getData();
  }, []);

  const logout = async () => {
    await Auth.signOut();
  };

  const checkLoginState = async () => {
    try {
      await Auth.currentAuthenticatedUser();
      setLoginState(true);
    } catch (err) {
      setLoginState(false);
      console.log(err);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Button
        title="Login"
        onPress={() => props.navigation.navigate('Login')}
      />

      <Button
        title="SignUp"
        onPress={() => props.navigation.navigate('Signup')}
      />

      <Button
        title="Confirm signup"
        onPress={() => props.navigation.navigate('ConfirmSignup')}
      />

      <Button
        title="Records"
        onPress={() => props.navigation.navigate('Record')}
      />

      <Button title="Logout" onPress={logout} />

      <Button title="Check login state" onPress={checkLoginState} />

      <Text>Login state:</Text>
      <Text>{loginState ? 'logged in' : 'not logged in'}</Text>
    </View>
  );
};
