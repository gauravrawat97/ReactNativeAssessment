/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';
const images = [
  {
    image: require('../assets/slider/banner_first.png'),
  },
  {
    image: require('../assets/slider/banner_second.jpeg'),
  },
  {
    image: require('../assets/slider/banner_third.jpeg'),
  },
  {
    image: require('../assets/slider/banner_fourth.jpeg'),
  },
  {
    image: require('../assets/slider/banner_first.png'),
  },
  {
    image: require('../assets/slider/banner_second.jpeg'),
  },
  {
    image: require('../assets/slider/banner_third.jpeg'),
  },
  {
    image: require('../assets/slider/banner_fourth.jpeg'),
  },
];

function ImageSlider() {
  return (
    <>
      <View style={style.container}>
        <FlatListSlider
          data={images}
          height={180}
          indicatorContainerStyle={style.indicaterContainer}
          indicatorActiveColor={'orange'}
          indicatorInActiveColor={'#C8C8C8'}
          indicatorActiveWidth={15}
          local
          onPress={() => null}
        />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    height: 230,
    backgroundColor: 'white',
    padding: 10,
    marginTop: 5,
  },
  indicaterContainer: {width: '100%', marginLeft: 30},
});

export default ImageSlider;
