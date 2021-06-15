import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {images} from '../../assets';
import BackScr from '../../components/BackScr';
import StepIndicate from '../../components/StepIndicator';

const OrderList = ({navigation}) => {
  return (
    <>
      <BackScr navigation={navigation} />

      <View style={styles.mainheadingStyle}>
        <Text style={styles.subheadingStyle}>Order List</Text>
        <Image source={images.line1}></Image>
      </View>

      <View style={styles.maincardStyle}>
        <View style={styles.rowStyle}>
          <View style={styles.subtimeStyle}>
            <View>
              <Text style={{fontSize: 15, paddingBottom: 6}}>Order#: </Text>
              <Image source={images.line1}></Image>
            </View>
            <Text style={styles.subheadingStyle}>AT-293</Text>
          </View>
        </View>

        <StepIndicate />

        <View style={styles.clockStyle}>
          <View style={styles.timeStyle}>
            <View style={styles.timeviewStyle}>
              <Text style={styles.boldsizeStyle}>02 : 00</Text>
              <Text style={styles.fontStyle}> PM</Text>
            </View>
            <Text style={styles.fontStyle}>Order Placed</Text>
          </View>
          <View>
            <Image source={images.clock} />
          </View>
          <View style={styles.timeStyle}>
            <View style={styles.subtimeStyle}>
              <Text style={[{textAlign: 'left'}, styles.boldsizeStyle]}>
                02 : 00
              </Text>
              <Text style={styles.fontStyle}> PM</Text>
            </View>
            <Text style={styles.fontStyle}>Order Delivered</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default OrderList;

const styles = StyleSheet.create({
  mainheadingStyle: {
    paddingLeft: 20,
    paddingBottom: 20,
  },
  subheadingStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontSize: 15,
  },
  maincardStyle: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F7F7F7',
    width: '90%',
    height: '35%',
    padding: 24,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: 20,
  },
  clockStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  timeviewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  timeStyle: {
    display: 'flex',
    flexDirection: 'column',
  },
  subtimeStyle: {
    display: 'flex',
    flexDirection: 'row',
  },
  rowStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fontStyle: {
    fontSize: 12,
  },
  boldStyle: {
    fontWeight: 'bold',
  },
  boldsizeStyle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
