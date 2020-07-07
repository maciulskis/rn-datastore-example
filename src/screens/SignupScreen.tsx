import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {Auth} from '@aws-amplify/auth';

export const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);

    try {
      await Auth.signUp({username: email, password, attributes: {email}});
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <View style={{flex: 1}}>
      <TextInput
        placeholder="email"
        value={email}
        onChangeText={setEmail}
        textContentType="emailAddress"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        textContentType="password"
      />

      <Button title="Submit" onPress={onSubmit} />

      {loading ? <Text>Loading</Text> : null}
    </View>
  );
};
