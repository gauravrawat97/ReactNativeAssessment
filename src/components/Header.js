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
  SafeAreaView,
  Alert,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Header() {
  return (
    <>
      <SafeAreaView />
      <View style={style.container}>
        <TouchableOpacity
          style={style.logoContainer}
          onPress={() => Alert.alert('Logo', 'You clicked on Logo')}>
          <Image
            style={style.logo}
            source={require('../assets/icons/logo.png')}
          />
        </TouchableOpacity>
        <View style={style.headerRight}>
          <TouchableOpacity
            onPress={() =>
              Alert.alert('Location', 'You clicked on the Location button')
            }>
            <AntDesign name="enviromento" size={30} color={'orange'} />
          </TouchableOpacity>
          <View style={style.divider} />

          <TouchableOpacity
            onPress={() =>
              Alert.alert('Cart', 'You clicked on the cart button')
            }>
            <AntDesign name="shoppingcart" size={30} color={'black'} />
            <View style={style.cartCounter}>
              <Text style={style.cartText}>0</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    alignItems: 'center',
    borderBottomColor: 'grey',
    borderWidth: 1,
    backgroundColor: 'white',
  },
  logoContainer: {},
  logo: {
    width: 150,
    height: 60,
  },
  headerRight: {
    flexDirection: 'row',
    width: 150,
    justifyContent: 'space-evenly',
  },
  cartCounter: {
    position: 'absolute',
    right: -5,
    top: -5,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    width: 20,
    height: 20,
  },
  cartText: {
    textAlign: 'center',
    padding: 2,
    borderRadius: 100,
    fontSize: 8,
  },
  divider: {
    borderWidth: 1,
    height: 20,
    alignSelf: 'center',
    borderColor: 'grey',
  },
});

export default Header;
