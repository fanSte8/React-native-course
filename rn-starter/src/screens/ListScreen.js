import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 18 },
    { name: 'Friend #3', age: 41 },
    { name: 'Friend #4', age: 33 },
    { name: 'Friend #5', age: 18 },
    { name: 'Friend #6', age: 24 },
    { name: 'Friend #7', age: 22 },
    { name: 'Friend #8', age: 22 },
    { name: 'Friend #9', age: 29 },
    { name: 'Friend #10', age: 30 }
  ]

  return (
    <FlatList
      data={friends}
      keyExtractor={friend => friend.name}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;