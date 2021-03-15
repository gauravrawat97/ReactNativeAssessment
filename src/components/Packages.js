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
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Card from './Card';
function Packages({itemPressed, btnPressed}) {
  return (
    <>
      <View style={style.container}>
        <View style={style.headerContainer}>
          <Text style={style.leftHeading}>
            Diagnostic Packages by Zoylo Labs
          </Text>
          <TouchableOpacity onPress={btnPressed}>
            <Text style={style.rightHeading}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true}>
          <View style={style.itemMainContainer}>
            <Card itemPressed={itemPressed} btnPressed={btnPressed} />
            <Card itemPressed={itemPressed} btnPressed={btnPressed} />
            <Card itemPressed={itemPressed} btnPressed={btnPressed} />
            <Card itemPressed={itemPressed} btnPressed={btnPressed} />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 20,
  },
  leftHeading: {
    fontSize: 12,
  },
  rightHeading: {
    color: 'orange',
    fontSize: 10,
  },
  itemMainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Packages;
