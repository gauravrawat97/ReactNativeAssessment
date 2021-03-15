/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

function Service({data, btnPressed}) {
  return (
    <>
      <View style={style.container}>
        <ScrollView horizontal={true}>
          {data.map(({name, id, image}) => (
            <TouchableOpacity
              style={style.itemContainer}
              key={id}
              onPress={() => btnPressed(name)}>
              <Image style={style.itemImage} source={image} />
              <Text style={style.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    padding: 10,
  },
  itemContainer: {
    backgroundColor: 'white',
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 5,
    elevation: 5,
  },
  itemText: {
    width: 100,
    textAlign: 'center',
  },
});

export default Service;
