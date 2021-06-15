import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import chooseOnline from '../screens/Tour/chooseOnline';
import orderFood from '../screens/Tour/orderFood';
import delivery from '../screens/Tour/delivery';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import Welcome from '../screens/Welcome';
import Register from '../screens/Register';
import JobExec from '../screens/JobExecute';
import OrderList from '../screens/OrderList';
import AppDrawerScreen from './AppDrawerScreen';
import PickupDetails from '../screens/PickupDetails';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="chooseOnline" component={chooseOnline} />
      <Stack.Screen name="orderFood" component={orderFood} />
      <Stack.Screen name="delivery" component={delivery} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="AppDrawerScreen" component={AppDrawerScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="JobExec" component={JobExec} />
      <Stack.Screen name="OrderList" component={OrderList} />
      <Stack.Screen name="PickupDetails" component={PickupDetails} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
