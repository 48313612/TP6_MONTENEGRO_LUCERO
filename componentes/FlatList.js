import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

export default function MiFlatList() {
  const data = [
    { id: '1', title: 'Elemento 1' },
    { id: '2', title: 'Elemento 2' },
    { id: '3', title: 'Elemento 3' },
  ];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});