import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {images} from '../../assets';

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('chooseOnline');
    }, 3000);
  }, []);
  return (
    <View>
      <Image style={styles.splashStyle} source={images.splash} />
    </View>
  );
};

const styles = StyleSheet.create({
  splashStyle: {
    width: '100%',
    height: '100%',
  },
});

export default Splash;
