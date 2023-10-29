import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { Stack, router } from 'expo-router';
import { useStreamVideoClient } from '@stream-io/video-react-native-sdk';
function genRandomString(length: number) {
  const chars =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0987654321';
  const charLength = chars.length;
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
}
const HomeScreen = () => {
  const client = useStreamVideoClient();
  const onCreateCall = () => {
    if (!client) return;
    const callId = genRandomString(5);
    const call = client.call('default', callId);
    call.join({ create: true });
    router.push('/call');
  };
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'FaceTime' }} />
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Pressable style={styles.button} onPress={onCreateCall}>
          <Text>Create Call</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => router.push('/join')}>
          <Text>Join Call</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    flex: 1,
    backgroundColor: 'gainsboro',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default HomeScreen;
