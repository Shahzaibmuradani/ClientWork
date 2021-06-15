import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {images} from '../../assets';
import DrawerScr from '../../components/DrawerScr';

const Today = props => {
  return (
    <>
      <DrawerScr navigation={props.navigation} />

      <View style={styles.maincardStyle}>
        <View style={styles.rowStyle}>
          <View>
            <Text style={styles.todayheadingStyle}>Today</Text>
            <Image source={images.line1}></Image>
          </View>
          <View>
            <View style={styles.dateStyle}>
              <Text style={styles.boldStyle}>30 min</Text>
              <Text style={styles.fontStyle}> ago</Text>
            </View>
            <View>
              <Text style={{fontSize: 10}}>Last Order Placed</Text>
            </View>
          </View>
        </View>

        <View style={[styles.headericonStyle, {width: '100%'}]}>
          <View style={styles.rowStyle}>
            <View style={styles.todaycardStyle}>
              <Text style={[styles.fontStyle, styles.boldStyle]}>10</Text>
              <Text style={styles.fontStyle}>Order Delivered</Text>
            </View>
          </View>

          <View style={styles.justifyContent}>
            <Image source={images.line2} />
          </View>

          <View style={styles.rowStyle}>
            <View style={styles.todaycardStyle}>
              <Text style={[styles.fontStyle, styles.boldStyle]}>25</Text>
              <Text style={styles.fontStyle}>Nearby Restaurants</Text>
            </View>
          </View>

          <View style={styles.justifyContent}>
            <Image source={images.line2} />
          </View>

          <View style={styles.rowStyle}>
            <View style={styles.todaycardStyle}>
              <Text style={[styles.fontStyle, styles.boldStyle]}>13</Text>
              <Text style={styles.fontStyle}>Nearby Marts</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  maincardStyle: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFF',
    width: '90%',
    height: '30%',
    padding: 24,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  todaycardStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  todayheadingStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 6,
  },
  dateStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headericonStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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
  justifyContent: {
    justifyContent: 'center',
  },
});

export default Today;
