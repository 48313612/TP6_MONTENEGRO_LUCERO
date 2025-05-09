import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Texto() {
  return <Text style={styles.text}>Bienvenido a mi aplicación!</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});