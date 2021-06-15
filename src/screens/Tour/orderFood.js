import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {images} from '../../assets';
import NextButton from '../../components/TourButton';

const orderFood = ({navigation}) => {
  return (
    <>
      <View style={styles.viewStyle}>
        <Image source={images.waveTwo} />
        <Text style={styles.maitextStyle}>Order Food</Text>
        <Image style={styles.globalYellowStyle} source={images.globalYellow} />
        <Image style={styles.layerTwoStyle} source={images.layerTwo} />
        <Image style={styles.tombStyle} source={images.tomb} />
        <Text style={styles.textStyle}>
          Lorem ipsum dolor sit amet,{'\n'} consectetuer adipiscing elit, sed
          diam {'\n'} nonummy nibh euismod tincidunt ut
        </Text>
      </View>
      <NextButton navigation={navigation} nextScreen="delivery" />
    </>
  );
};

const styles = StyleSheet.create({
  maitextStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    bottom: 120,
  },
  viewStyle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  globalYellowStyle: {
    position: 'absolute',
    alignSelf: 'center',
    top: 150,
  },
  layerTwoStyle: {
    alignSelf: 'center',
    bottom: 35,
  },
  tombStyle: {
    alignSelf: 'center',
    bottom: 195,
  },
  textStyle: {
    textAlign: 'center',
    bottom: 126,
  },
});

export default orderFood;
