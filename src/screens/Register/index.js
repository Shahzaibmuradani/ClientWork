import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {HelperText, Button} from 'react-native-paper';
import {colors} from '../../constants/Colors';

const Register = ({navigation}) => {
  var validemail = false,
    validpass = false;
  const [formdata, setFormdata] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  });

  const {firstName, lastName, email, password, password2} = formdata;

  const onChange = (name, value) =>
    setFormdata({
      ...formdata,
      [name]: value,
    });

  const checkEmail = () => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return validemail;
    }
  };

  const checkPasswords = () => {
    if (password === password2) {
      return validpass;
    }
  };

  return (
    <>
      <View style={styles.viewStyle}>
        <View style={styles.viewHeading}>
          <Text style={styles.heading}>Register Account</Text>
          <Text>Enter Details to Register your Account</Text>
        </View>

        <View style={styles.formStlye}>
          <TextInput
            placeholder="Enter Your First Name"
            style={styles.inputheight}
            value={firstName}
            onChangeText={text => onChange('firstName', text)}
          />

          <TextInput
            placeholder="Enter Your Last Name"
            style={styles.inputheight}
            value={lastName}
            onChangeText={text => onChange('lastName', text)}
          />

          <TextInput
            placeholder="Enter Your Email Address"
            autoCapitalize="none"
            style={styles.inputheight}
            value={email}
            onChangeText={text => onChange('email', text)}
          />

          <>
            {email ? (
              !validemail && (
                <>
                  <HelperText type="error" visible={checkEmail()}>
                    <Text>Email address is invalid!</Text>
                  </HelperText>
                </>
              )
            ) : (
              <></>
            )}
          </>

          <TextInput
            placeholder="Enter Your Password"
            secureTextEntry={true}
            style={styles.inputheight}
            value={password}
            onChangeText={text => onChange('password', text)}
          />
          <TextInput
            placeholder="Enter Your Confirm Password"
            secureTextEntry={true}
            style={styles.inputheight}
            value={password2}
            onChangeText={text => onChange('password2', text)}
          />
          {!validpass ? (
            <HelperText type="error" visible={checkPasswords()}>
              Password does not match
            </HelperText>
          ) : (
            <></>
          )}
        </View>
      </View>
      <Button
        onPress={() => navigation.navigate('AppDrawerScreen')}
        style={styles.customButton}
        mode="contained"
        color={colors.themecolor}>
        <Text style={styles.customText}>Continue</Text>
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewHeading: {
    display: 'flex',
    padding: 6,
    marginBottom: 4,
    alignItems: 'center',
  },
  inputheight: {
    borderWidth: 1,
    borderColor: colors.themecolor,
    borderRadius: 8,
    paddingVertical: 4,
    marginBottom: 10,
  },
  formStlye: {
    display: 'flex',
    width: '95%',
    padding: 8,
    paddingBottom: 24,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  customButton: {
    display: 'flex',
    alignSelf: 'center',
    width: '90%',
    borderRadius: 8,
    bottom: '6%',
  },
  customText: {
    textTransform: 'capitalize',
  },
});

export default Register;
