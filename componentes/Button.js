import React from 'react';
import { Button } from 'react-native';

export default function MiBoton() {
  return (
    <Button
      title="Hace clic en mi"
      onPress={() => alert('Botón presionado.')}
    />
  );
}