import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import {
  CallContent,
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  User,
} from '@stream-io/video-react-native-sdk';
import { useEffect, useState } from 'react';
import { View } from '../components/Themed';
const apiKey = 'p9r9w99trd5s';
const userId = 'faysal';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZmF5c2FsIn0.SpxZmxEl-hPK594FJZhBEqyaEKtMcqHy6z8gfK5Q778';
const callId = 'testCall';
const user: User = { id: userId };
export default function CallScreen() {
  const [client] = useState(
    () => new StreamVideoClient({ apiKey, user, token })
  );
  const [call] = useState(() => client.call('default', callId));

  useEffect(() => {
    call.join({ create: true });
  }, [call]);

  return (
    <View style={styles.container}>
      <StreamVideo client={client}>
        <StreamCall call={call}>
          <CallContent />
        </StreamCall>
      </StreamVideo>
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
