import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {images} from '../../assets';
import NextButton from '../../components/TourButton';

const chooseOnline = ({navigation}) => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.column}>
        <Image source={images.waveOne} />
        <Text style={styles.maitextStyle}>Choose Online</Text>
      </View>
      <Image style={styles.globalYellowStyle} source={images.globalYellow} />
      <View style={styles.row}>
        <Image style={styles.manStyle} source={images.man} />
        <Image style={styles.layerOneStyle} source={images.layerOne} />
      </View>
      <Text style={styles.textStyle}>
        Lorem ipsum dolor sit amet,{'\n'} consectetuer adipiscing elit, sed diam{' '}
        {'\n'} nonummy nibh euismod tincidunt ut
      </Text>
      <NextButton navigation={navigation} nextScreen="orderFood" />
    </View>
  );
};

const styles = StyleSheet.create({
  maitextStyle: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    bottom: '25%',
    position: 'absolute',
  },
  viewStyle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  globalYellowStyle: {
    left: 10,
    top: '24%',
    position: 'absolute',
  },
  manStyle: {
    left: '25%',
    bottom: '8%',
  },
  layerOneStyle: {
    bottom: '6%',
  },
  textStyle: {
    bottom: '4%',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
});

export default chooseOnline;
