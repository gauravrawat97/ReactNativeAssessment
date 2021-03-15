import React from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import Header from './Header';
import Service from './Service';
import Package from './Package';
import Packages from './Packages';
import Banner from './Banner';
import Medicine_Category from './MedicineCategory';
import ImageSlider from './ImageSlider';
import {banner} from './DataComponents/banner';
import {services} from './DataComponents/ServiceData';
import {Facility} from './DataComponents/Facility';
import {ServiceType} from './DataComponents/ServiceType';
export default class Home extends React.Component {
  bannerPress() {
    Alert.alert('Info', 'You pressed the banner');
  }

  btnPress() {
    Alert.alert('Info', 'You pressed the button');
  }

  iconPressed(content) {
    Alert.alert('Info', content);
  }
  render() {
    return (
      <View style={style.container}>
        <ScrollView>
          <Header />
          <ImageSlider />
          <Service data={ServiceType} btnPressed={this.iconPressed} />
          <Package data={Facility} btnPressed={this.iconPressed} />
          <Packages itemPressed={this.bannerPress} btnPressed={this.btnPress} />
          <View style={style.medicine_category}>
            <Text>Medicine Categories</Text>

            <Medicine_Category data={services} btnPressed={this.iconPressed} />
          </View>
          <View style={style.banners}>
            {banner.map((data, index) => (
              <Banner
                {...data}
                key={index}
                itemPressed={this.bannerPress}
                btnPressed={this.btnPress}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  banners: {
    marginTop: 30,
    marginBottom: 10,
  },
  medicine_category: {
    marginTop: 20,
    padding: 10,
  },
});
