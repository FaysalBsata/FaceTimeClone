import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import { Redirect, Stack } from 'expo-router';
import { useAuth } from '../../context/AuthProvider';

const AppLayout = () => {
  const { session, loading } = useAuth();
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }
  if (!session) {
    return <Redirect href={'/auth'} />;
  }
  return <Stack />;
};

export default AppLayout;
