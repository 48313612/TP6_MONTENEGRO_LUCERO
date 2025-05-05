import React from 'react';
import { Button } from 'react-native';

export default function MiBoton() {
  return (
    <Button
      title="Haz clic en mí"
      onPress={() => alert('¡Botón presionado!')}
    />
  );
}