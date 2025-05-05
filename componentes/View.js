import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Vista() {
  return (
    <View style={styles.container}>
      <Text>¡Hola, React Native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});