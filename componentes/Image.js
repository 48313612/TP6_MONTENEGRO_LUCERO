import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Imagen() {
  return (
    <Image
      source={require('../assets/image.png')}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});