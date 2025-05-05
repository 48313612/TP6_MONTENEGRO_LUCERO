import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Vista from '../componentes/View';
import Texto from '../componentes/Texto';
import Imagen from '../componentes/Imagen';
import MiTextInput from '../componentes/TextInput';
import MiBoton from '../componentes/Button';
import MiScrollView from '../componentes/ScrollView';
import MiFlatList from '../componentes/FlatList';
//npx expo start --tunnel

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Vista />
      <Texto />
      <Imagen />
      <MiTextInput />
      <MiBoton />
      <MiScrollView />
      <MiFlatList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});