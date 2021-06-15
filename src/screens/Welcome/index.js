import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {images} from '../../assets';
import {colors} from '../../constants/Colors';

const Welcome = ({navigation}) => {
  return (
    <>
      <View style={styles.viewStyle}>
        <Image source={images.house} />
        <View style={styles.subviewStyle}>
          <Text style={styles.titleStyle}>Welcome</Text>
          <Text style={styles.subtitleStyle}>Sign in to continue</Text>
        </View>
        <View style={styles.buttonviewStyle}>
          <Button
            style={styles.customButton}
            mode="contained"
            color={colors.themecolor}>
            <Text style={styles.customText}> Sign in </Text>
          </Button>
          <Button
            onPress={() => navigation.navigate('Register')}
            style={styles.customButton}
            mode="contained"
            color={colors.themecolor}>
            <Text style={styles.customText}> Sign up </Text>
          </Button>
          <Text style={{padding: 6}}>or</Text>
          <Button
            style={styles.customButton}
            mode="contained"
            icon="facebook"
            color={colors.fbcolor}>
            <Text style={styles.customText}>Sign in with facebook</Text>
          </Button>
        </View>
      </View>
      <View>
        <Text style={styles.bottomStyle}>
          By signing in , you accept our{' '}
          <Text style={{color: colors.themecolor}}>Terms and Conditions</Text>
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subviewStyle: {
    top: 10,
    width: '100%',
    alignItems: 'center',
    padding: 14,
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitleStyle: {
    fontSize: 16,
  },
  buttonviewStyle: {
    top: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
  },
  customButton: {
    margin: 6,
    width: '85%',
    borderRadius: 8,
  },
  customText: {
    textTransform: 'capitalize',
  },
  bottomStyle: {
    textAlign: 'center',
    bottom: 6,
  },
});

export default Welcome;
