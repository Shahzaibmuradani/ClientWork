import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from 'react-native-paper';
import BackScr from '../../components/BackScr';
import {images} from '../../assets';
import StepIndicate from '../../components/StepIndicator';
import {colors} from '../../constants/Colors';

const PickupDetails = ({navigation}) => {
  return (
    <>
      <BackScr navigation={navigation} />

      <View style={styles.viewStyle}>
        <View style={styles.mainheadingStyle}>
          <View>
            <Text style={styles.subheadingStyle}>Pickup Details</Text>
            <Image source={images.line1} />
          </View>
          <View>
            <Text style={styles.boldStyle}>6 Mins</Text>
          </View>
        </View>

        <View style={styles.indicatorStyle}>
          <StepIndicate />
        </View>

        <View style={styles.paymentStyle}>
          <View>
            <Text style={[styles.chargersStyle, styles.boldStyle]}>
              290 PKR
            </Text>
            <Text
              style={[styles.alignStyle, styles.boldStyle, styles.font12Style]}>
              Total
            </Text>
          </View>
        </View>

        <View style={styles.lineStyle}>
          <Image source={images.line4} />
        </View>

        <View style={styles.buttonStyle}>
          <Button
            onPress={() => console.log('Pressed')}
            style={styles.customButton}
            mode="contained"
            color={colors.themecolor}>
            <Text style={styles.customText}>Picked Up</Text>
          </Button>
        </View>

        <View>
          <View style={styles.orderStyle}>
            <View style={styles.suborderStyle}>
              <View>
                <Text style={[styles.font16Style, styles.boldStyle]}>
                  Order#: AT-293
                </Text>
              </View>
              <View>
                <Image source={images.line1} />
              </View>
            </View>
            <View>
              <Image resizeMode="center" source={images.file} />
            </View>
          </View>
        </View>

        {/* <View>
          <Image source={images.tabs} />
        </View> */}
      </View>
    </>
  );
};

export default PickupDetails;

const styles = StyleSheet.create({
  mainheadingStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
  },
  viewStyle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  subheadingStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 6,
  },
  indicatorStyle: {
    paddingLeft: 18,
  },
  orderStyle: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  suborderStyle: {
    justifyContent: 'space-evenly',
    paddingLeft: 10,
  },
  paymentStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chargersStyle: {
    color: colors.chargescolor,
    fontSize: 22,
  },
  lineStyle: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    display: 'flex',
    flex: 1,
    padding: 16,
    paddingTop: 0,
    justifyContent: 'center',
    bottom: 2,
  },
  customButton: {
    display: 'flex',
    alignSelf: 'center',
    width: '100%',
    borderRadius: 8,
  },
  customText: {
    textTransform: 'capitalize',
  },
  boldStyle: {
    fontWeight: 'bold',
  },
  font12Style: {
    fontSize: 12,
  },
  font16Style: {
    fontSize: 16,
  },
  alignStyle: {
    textAlign: 'center',
  },
});
