import React from 'react';
import {View, StyleSheet, Image, ImageBackground} from 'react-native';
import {images} from '../../assets';
import History from './History';
import Today from './Today';

const Home = props => {
  // console.log('Home ', props.navigation);
  return (
    <>
      <ImageBackground style={styles.mainStyle} source={images.head}>
        <Today navigation={props.navigation} />
        <History />
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    width: '100%',
    height: '40%',
  },
});

export default Home;
