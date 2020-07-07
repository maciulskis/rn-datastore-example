import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {Auth} from '@aws-amplify/auth';

export const ConfirmSignupScreen = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);

    try {
      await Auth.confirmSignUp(email, code);
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
        autoCapitalize="none"
      />

      <TextInput placeholder="code" value={code} onChangeText={setCode} />

      <Button title="Submit" onPress={onSubmit} />

      {loading ? <Text>Loading</Text> : null}
    </View>
  );
};
