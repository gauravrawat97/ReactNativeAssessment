/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Banner({
  heading,
  subheading,
  btnTransparent,
  containIcon,
  customColor,
  showButton,
  btnText,
  id,
  itemPressed,
  btnPressed,
}) {
  return (
    <>
      <TouchableOpacity key={id} style={style.container} onPress={itemPressed}>
        <View style={style.firstPortion}>
          <Text style={style.text}>{heading}</Text>
          {showButton && (
            <TouchableOpacity
              onPress={btnPressed}
              style={
                btnTransparent ? style.btnTransContainer : style.btnContainer
              }>
              <Text style={btnTransparent ? style.transBtn : style.btn}>
                {btnText}
              </Text>
            </TouchableOpacity>
          )}
        </View>
        {!containIcon && !showButton ? (
          <Text style={[style.nonIconText]}>{subheading}</Text>
        ) : containIcon ? (
          <View style={style.iconContainer}>
            <View style={style.icon}>
              <AntDesign name={'right'} size={10} color={customColor} />
            </View>
            <Text style={[style.text, style.subhead, style.iconText]}>
              {subheading}
            </Text>
          </View>
        ) : (
          <Text style={[style.text, style.subhead]}>{subheading}</Text>
        )}
      </TouchableOpacity>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: 200,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 5,
  },
  firstPortion: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  text: {
    width: 200,
    fontSize: 20,
  },
  subhead: {
    fontSize: 10,
  },
  btnContainer: {
    backgroundColor: 'orange',
    borderRadius: 10,
    borderColor: 'orange',
    borderWidth: 1,
  },

  btn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: 'white',
    fontSize: 10,
  },
  btnTransContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'orange',
    borderWidth: 1,
  },

  transBtn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: 'orange',
    fontSize: 10,
  },

  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  icon: {
    borderColor: 'orange',
    padding: 2,
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 5,
  },
  iconText: {
    color: 'orange',
  },
  nonIconText: {
    color: 'black',
    marginLeft: 40,
  },
});

export default Banner;
