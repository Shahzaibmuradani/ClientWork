import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {images} from '../../assets';

const BackIcon = ({navigation}) => {
  return (
    <View style={{justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={images.back}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default BackIcon;

// const styles = StyleSheet.create({});
