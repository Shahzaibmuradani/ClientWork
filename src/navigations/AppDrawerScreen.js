import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';

const AppDrawer = createDrawerNavigator();

const AppDrawerScreen = props => {
  //  console.log(props);
  return (
    <AppDrawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <AppDrawer.Screen name="App" component={Home} props={props.navigation} />
    </AppDrawer.Navigator>
  );
};

function DrawerContent(props) {
  const {navigation} = props;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <View style={styles.row}>
                <View style={styles.column}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('JobExec')}>
                    <Text style={styles.title}>Job Executed</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => navigation.navigate('OrderList')}>
                    <Text style={styles.title}>Order List</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => navigation.navigate('PickupDetails')}>
                    <Text style={styles.title}>Pickup Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="exit-to-app" color={color} size={size} />
            )}
            label="Logout"
            onPress={() => {
              navigation.navigate('Welcome');
            }}
          />
        </Drawer.Section>
      </View>
    </SafeAreaView>
  );
}

// AppDrawerScreen.propTypes = {
//   logout: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
// });

export default AppDrawerScreen;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: 'bold',
  },
  bottomDrawerSection: {
    paddingLeft: 25,
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  row: {
    flexDirection: 'row',
    marginTop: 15,
  },
  column: {
    padding: 20,
    flexDirection: 'column',
  },
});
