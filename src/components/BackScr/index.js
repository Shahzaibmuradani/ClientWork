import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {images} from '../../assets';
import BackIcon from '../BackIcon';

const BackScr = ({navigation}) => {
  return (
    <View style={styles.viewStyle}>
      <BackIcon navigation={navigation} />
      <View style={styles.headericonStyle}>
        <View style={{paddingHorizontal: 4}}>
          <TouchableOpacity onPress={() => console.log('Pressed')}>
            <Image source={images.bellBadge} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => console.log('Pressed')}>
            <Image source={images.sBadge}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BackScr;

const styles = StyleSheet.create({
  viewStyle: {
    padding: 20,
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headericonStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
