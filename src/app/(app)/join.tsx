import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { useStreamVideoClient } from '@stream-io/video-react-native-sdk';
import { router } from 'expo-router';

const JoinCallScreen = () => {
  const [callId, setCallId] = useState('');
  const client = useStreamVideoClient();

  const onJoin = async () => {
    if (!client) return;
    const call = client?.call('default', callId);
    try {
      await call.join();
    } catch (err: any) {
      Alert.alert('Error', err?.message);
    }
    router.push('/call');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join Call By ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Call ID"
        value={callId}
        onChangeText={setCallId}
      />
      <Button title="Join Call" onPress={onJoin} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  title: { fontSize: 20, fontWeight: '500', textAlign: 'center' },
  input: {
    backgroundColor: 'white',
    marginVertical: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'gainsboro',
    borderRadius: 10,
    fontSize: 16,
  },
});
export default JoinCallScreen;
