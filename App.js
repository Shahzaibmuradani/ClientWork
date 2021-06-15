import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import StackNavigator from './src/navigations/StackNavigator';
// import Welcome from './src/screens/Welcome';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar barStyle={'light-content'} />
        <StackNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default App;
