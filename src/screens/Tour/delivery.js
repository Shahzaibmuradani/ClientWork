import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {images} from '../../assets';
import NextButton from '../../components/TourButton';

const delivery = ({navigation}) => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.column}>
        <Image style={styles.waveThree} source={images.waveThree} />
        <Text style={styles.maitextStyle}>Delivery</Text>
      </View>
      <Image style={styles.globalYellowStyle} source={images.globalYellow} />
      <View style={styles.row}>
        <Image style={styles.layerThreeStyle} source={images.layerThree} />
        <Image style={styles.scooterStyle} source={images.scooter} />
      </View>
      <Text style={styles.textStyle}>
        Lorem ipsum dolor sit amet,{'\n'} consectetuer adipiscing elit, sed diam
        {'\n'} nonummy nibh euismod tincidunt ut
      </Text>
      <NextButton navigation={navigation} nextScreen="Welcome" />
    </View>
  );
};

const styles = StyleSheet.create({
  maitextStyle: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    top: '40%',
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
    //bottom: 0,
    top: '21%',
    right: 0,
  },
  waveThree: {
    bottom: 25,
  },
  layerThreeStyle: {
    top: '18%',
  },
  scooterStyle: {
    position: 'absolute',
    left: '14%',
    bottom: 0,
  },
  textStyle: {
    textAlign: 'center',
    //bottom: 10,
    bottom: '4.5%',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
});

export default delivery;
