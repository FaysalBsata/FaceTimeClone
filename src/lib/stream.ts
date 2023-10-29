import { StreamVideoClient, User } from '@stream-io/video-react-native-sdk';

const apiKey = process.env.EXPO_PUBLIC_STREAM_API_KEY || '';
const userId = 'faysal';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZmF5c2FsIn0.SpxZmxEl-hPK594FJZhBEqyaEKtMcqHy6z8gfK5Q778';
const user: User = { id: userId };
export const client = new StreamVideoClient({ apiKey, user, token });
