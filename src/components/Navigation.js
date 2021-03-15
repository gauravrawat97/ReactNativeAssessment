import * as React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from './Home';

function Search() {
  return (
    <View style={style.tabs}>
      <Text>Search!</Text>
    </View>
  );
}

function Call() {
  return (
    <View style={style.tabs}>
      <Text>Call!</Text>
    </View>
  );
}

function Notification() {
  return (
    <View style={style.tabs}>
      <Text>Notification</Text>
    </View>
  );
}

function Account() {
  return (
    <View style={style.tabs}>
      <Text>Account!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Search') {
              iconName = 'search1';
            } else if (route.name === 'Call') {
              iconName = 'phone';
              return (
                <View style={style.phone}>
                  <Image
                    style={style.phoneImage}
                    source={require('../assets/icons/phone.png')}
                  />
                </View>
              );
            } else if (route.name === 'Notification') {
              iconName = 'bells';
            } else if (route.name === 'Account') {
              iconName = 'user';
            }
            return <AntDesign name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',

          style: {height: 60, padding: 5},
          tabStyle: {height: 50},
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Call" component={Call} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  phone: {
    position: 'absolute',
    top: -40,
  },
  phoneImage: {
    width: 70,
    height: 70,
  },
  tabs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
