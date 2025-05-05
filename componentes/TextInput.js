import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function MiTextInput() {
  const [texto, setTexto] = useState('');

  return (
    <TextInput
      placeholder="Ingrese su nombre de usuario"
      style={styles.input}
      onChangeText={text => setTexto(text)} // Actualiza el estado con el texto ingresado
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