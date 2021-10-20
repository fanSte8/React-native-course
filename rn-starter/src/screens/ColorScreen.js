import React, { useState }  from 'react';
import { Text, View, Button, StyleSheet, FlatList } from 'react-native';

const ColorScreen = () => {
  const [ colors, setColors ] = useState([]);

  return (
    <View>
      <Button 
        title="Add a Color"
        onPress={() => setColors([ ...colors, randomRgb() ])}
      />
      <FlatList 
        keyExtractor={color => color}
        data={colors}
        renderItem={({ item }) => (
            <View style={{ height: 100, width: 100, backgroundColor: item }}/>
          )
        }
      />
    </View>
  );
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({});

export default ColorScreen;