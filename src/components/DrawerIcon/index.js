import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {images} from '../../assets';

const DrawerIcon = props => {
  const drawerToggleHandler = () => {
    props.navigation.toggleDrawer();
  };
  return (
    <View style={{justifyContent: 'center'}}>
      <TouchableOpacity onPress={drawerToggleHandler}>
        <Image source={images.drawer}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerIcon;

// const styles = StyleSheet.create({});
