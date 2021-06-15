import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import {colors} from '../../constants/Colors';
//import {images} from '../../assets';

const StepIndicate = () => {
  const [currentposition, setCurrentposition] = useState(0);
  const labels = ['Pickup Address', 'Delivery Address'];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 25,
    separatorStrokeWidth: 1,
    currentStepStrokeWidth: 1,
    stepStrokeCurrentColor: colors.black,
    stepStrokeWidth: 1,
    //stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: colors.black,
    // separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: colors.black,
    // stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: colors.themecolor,
    stepIndicatorCurrentColor: colors.themecolor,
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: colors.black,
    // stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: colors.black,
    labelColor: colors.black,
    labelSize: 13,
    currentStepLabelColor: colors.black,
  };
  const data = [
    {
      label: 'Pickup Address',
      status: 'Street No. 7, Najaf Colony Allama Iqbal Town, Lahore',
    },
    {
      label: 'Delivery Address',
      status: 'Street No. 7, Najaf Colony Allama Iqbal Town, Lahore',
    },
  ];

  // const startpoint = images.startpoint;
  // const endpoint = images.endpoint;
  // console.log(startpoint);
  // console.log(endpoint);
  // const count = [
  //   {
  //     stepStatus: '4',
  //   },
  //   {
  //     stepStatus: '5',
  //   },
  // ];
  return (
    <View style={styles.viewStyle}>
      <StepIndicator
        stepCount={2}
        customStyles={customStyles}
        currentPosition={currentposition}
        labels={labels}
        direction="vertical"
        renderLabel={({position, stepStatus, label, currentPosition}) => {
          return (
            <View style={{paddingLeft: 12}}>
              <Text style={styles.boldsizeStyle}>{data[position].label}</Text>
              <Text style={styles.fontStyle}>{data[position].status}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default StepIndicate;

const styles = StyleSheet.create({
  viewStyle: {
    width: '100%',
    height: '60%',
  },
  boldsizeStyle: {
    fontSize: 8,
    fontWeight: 'bold',
  },
  fontStyle: {
    fontSize: 9,
  },
});
