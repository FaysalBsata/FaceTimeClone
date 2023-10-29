import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text } from 'react-native';
import {
  CallContent,
  StreamCall,
  StreamVideo,
  useStreamVideoClient,
} from '@stream-io/video-react-native-sdk';
import { useEffect, useState } from 'react';
import { View } from '../components/Themed';
const callId = 'testCall';
export default function CallScreen() {
  const client = useStreamVideoClient();
  const [call] = useState(() => client?.call('default', callId));

  useEffect(() => {
    call?.join({ create: true });
  }, [call]);
  if (!call) {
    return <Text>Call Not Found!</Text>;
  }

  return (
    <View style={styles.container}>
      <StreamCall call={call}>
        <CallContent />
      </StreamCall>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
