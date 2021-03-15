/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

function Card({itemPressed, btnPressed}) {
  return (
    <>
      <TouchableOpacity style={style.itemContainer} onPress={itemPressed}>
        <View style={style.firstHalfContainer}>
          <Text style={style.type}>Advanced</Text>
          <Text style={style.testType}>
            Zoylo Health Checkup with Iron Studies
          </Text>
          <Text style={style.totalTest}>183 Test Included</Text>
        </View>
        <View style={style.otherHalfContainer}>
          <Text style={style.discountRate}>₹ 3290</Text>
          <View style={style.priceContainer}>
            <Text style={style.price}>₹ 2222</Text>
            <Text style={style.discountPercent}>50% Off</Text>
          </View>
          <Text style={style.labName}>Zoylo Labs</Text>
          <TouchableOpacity style={style.btnContainer} onPress={btnPressed}>
            <Text style={style.bookBtn}>BOOK NOW</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </>
  );
}

const style = StyleSheet.create({
  itemContainer: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  firstHalfContainer: {
    backgroundColor: '#D8BFD8',
    justifyContent: 'space-between',
    height: 140,
    padding: 10,
  },
  type: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 25,
    fontSize: 10,
  },
  testType: {
    width: 150,
    fontSize: 12,
    fontWeight: 'bold',
  },
  totalTest: {
    fontWeight: '100',
    fontSize: 10,
    color: 'grey',
  },
  otherHalfContainer: {
    backgroundColor: 'white',
    padding: 10,
    height: 150,
    justifyContent: 'space-between',
  },
  discountRate: {
    textDecorationLine: 'line-through',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#2AAD44',
  },
  discountPercent: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#2AAD44',
    alignSelf: 'center',
    color: '#6CDF83',
    fontSize: 10,
  },

  labName: {
    color: '#E0E0E0',
    textTransform: 'uppercase',
  },
  btnContainer: {
    alignSelf: 'flex-start',
  },
  bookBtn: {
    color: 'orange',
    fontSize: 15,
    fontWeight: 'bold',
    zIndex: 9999,
  },
});

export default Card;
