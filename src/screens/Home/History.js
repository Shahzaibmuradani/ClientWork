import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {images} from '../../assets';

const History = () => {
  return (
    <View style={styles.viewStyle}>
      <View>
        <Text style={[styles.headingStyle, styles.boldStyle]}>History</Text>
        <Image source={images.line1}></Image>
      </View>

      <View style={styles.historycardStyle}>
        <Text>Completion Rate</Text>
        <Image style={styles.imagescaleStyle} source={images.yellowscale} />
        <Text style={styles.boldStyle}>80%</Text>
      </View>

      <View style={styles.historycardStyle}>
        <Text>Acceptance Rate</Text>
        <Image style={styles.imagescaleStyle} source={images.greenscale} />
        <Text style={styles.boldStyle}>94%</Text>
      </View>

      <View style={styles.historycardStyle}>
        <Text>Total Orders Delivered</Text>
        <Text style={styles.boldStyle}>121</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFF',
    width: '90%',
    height: '28%',
    padding: 24,
    marginTop: '4%',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  headingStyle: {
    fontSize: 18,
    paddingBottom: 6,
  },
  historycardStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imagescaleStyle: {
    height: '50%',
    top: 6,
    borderRadius: 10,
  },
  boldStyle: {
    fontWeight: 'bold',
  },
});

export default History;
