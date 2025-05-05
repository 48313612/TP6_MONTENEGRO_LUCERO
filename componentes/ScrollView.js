import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function MiScrollView() {
  return (
    <ScrollView style={styles.scrollView}>
      <Text>¡Desplázate por mí!</Text>
      {/* Puedes agregar más contenido aquí */}
      <Text>Contenido adicional que puede ser desplazado.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 20,
  },
});