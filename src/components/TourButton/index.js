import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

const NextButton = ({navigation, nextScreen}) => {
  const onNext = nextScreen => {
    navigation.navigate(nextScreen);
  };

  const onSkip = () => {
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity>
        <Text style={styles.textStyle} onPress={() => onSkip()}>
          Skip
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.textStyle} onPress={() => onNext(nextScreen)}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    //position: 'absolute',
    width: '100%',
    //height: '100%',
    //  top: '80%',
    bottom: 0,
    //display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  textStyle: {
    fontSize: 15,
  },
});

export default NextButton;
