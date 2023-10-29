import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Platform, StyleSheet, Text } from 'react-native';
import {
  CallContent,
  CallTopView,
  StreamCall,
  StreamVideo,
  useCalls,
  useStreamVideoClient,
} from '@stream-io/video-react-native-sdk';
import { useEffect, useState } from 'react';
import { View } from '../../components/Themed';
import { router } from 'expo-router';
const callId = 'testCall';
export default function CallScreen() {
  const client = useStreamVideoClient();
  const calls = useCalls();
  const call = calls[0];
  // const [call] = useState(() => client?.call('default', callId));

  // useEffect(() => {
  //   call?.join({ create: true });
  // }, [call]);
  // if (!call) {
  //   return <Text>Call Not Found!</Text>;
  // }
  if (!call) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <StreamCall call={call}>
        <CallContent
          CallTopView={() => <CallTopView title={`ID: ${call.id}`} />}
          onHangupCallHandler={() => router.back()}
        />
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
