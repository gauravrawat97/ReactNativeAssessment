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

function Package({data, btnPressed}) {
  return (
    <>
      <View style={style.container}>
        <ScrollView horizontal={true}>
          <View style={style.itemMainContainer}>
            {data.map(({name, image, index}) => (
              <TouchableOpacity
                onPress={() => btnPressed(name)}
                key={index}
                style={style.itemContainer}>
                <View style={style.itemImageContainer}>
                  <Image style={style.itemImage} source={image} />
                </View>
                <Text style={style.itemText}>{name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    height: 120,
  },
  itemMainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  itemImageContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 100,
    borderColor: '#E8E8E8',
    borderWidth: 2,
  },
  itemImage: {},
  itemText: {
    fontSize: 10,
    width: 80,
    textAlign: 'center',
  },
});

export default Package;
