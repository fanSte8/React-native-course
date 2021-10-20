import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    backgroundColor: 'green',
    width: 50,
    height: 50
  },
  viewTwoStyle: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
    alignSelf: 'flex-end'
  },
  viewThreeStyle: {
    backgroundColor: 'red',
    width: 50,
    height: 50
  },
});

export default BoxScreen;