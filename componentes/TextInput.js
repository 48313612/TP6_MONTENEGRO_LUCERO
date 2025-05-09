import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function MiTextInput() {
  const [texto, setTexto] = useState('');

  return (
    <TextInput
      placeholder="Ingrese su user:"
      style={styles.input}
      onChangeText={text => setTexto(text)}
      value={texto}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
});