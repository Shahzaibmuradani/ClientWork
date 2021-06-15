import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  //  SafeAreaView,
} from 'react-native';
import {images} from '../../assets';
import BackScr from '../../components/BackScr';

const JobExec = ({navigation}) => {
  return (
    <>
      <BackScr navigation={navigation} />
      <View style={styles.mainheadingStyle}>
        <Text style={styles.jobheadingStyle}>Jobs Executed</Text>
        <Image source={images.line1}></Image>
      </View>
      <ScrollView>
        <View style={styles.maincardStyle}>
          <View style={styles.rowStyle}>
            <View>
              <Text style={styles.dateheadingStyle}>06 April, 2021</Text>
              <Image source={images.line1}></Image>
            </View>

            <View style={styles.datesStyle}>
              <Text style={[styles.fontStyle, , styles.boldStyle]}>02:00</Text>
              <Text style={styles.fontStyle}> PM</Text>
              <Text> - </Text>
              <Text style={[styles.fontStyle, , styles.boldStyle]}>06:00</Text>
              <Text style={styles.fontStyle}> PM</Text>
            </View>
          </View>

          <View style={styles.headericonStyle}>
            <View style={styles.rowStyle}>
              <View style={styles.datecardStyle}>
                <Text style={[styles.fontStyle, , styles.boldStyle]}>10</Text>
                <Text style={styles.fontStyle}>Delivered</Text>
              </View>
            </View>

            <View style={styles.justifyContent}>
              <Image source={images.line2} />
            </View>

            <View style={styles.rowStyle}>
              <View style={styles.datecardStyle}>
                <Text style={[styles.fontStyle, , styles.boldStyle]}>25</Text>
                <Text style={styles.fontStyle}>Rejected</Text>
              </View>
            </View>

            <View style={styles.justifyContent}>
              <Image source={images.line2} />
            </View>

            <View style={styles.rowStyle}>
              <View style={styles.datecardStyle}>
                <Text style={[styles.fontStyle, , styles.boldStyle]}>13</Text>
                <Text style={styles.fontStyle}>Cancelled</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.maincardStyle}>
          <View style={styles.rowStyle}>
            <View>
              <Text style={styles.dateheadingStyle}>06 April, 2021</Text>
              <Image source={images.line1}></Image>
            </View>

            <View style={styles.datesStyle}>
              <Text style={[styles.fontStyle, , styles.boldStyle]}>02:00</Text>
              <Text style={styles.fontStyle}> PM</Text>
              <Text> - </Text>
              <Text style={[styles.fontStyle, , styles.boldStyle]}>06:00</Text>
              <Text style={styles.fontStyle}> PM</Text>
            </View>
          </View>

          <View style={[styles.headericonStyle, {width: '100%'}]}>
            <View style={styles.rowStyle}>
              <View style={styles.datecardStyle}>
                <Text style={[styles.fontStyle, , styles.boldStyle]}>10</Text>
                <Text style={styles.fontStyle}>Delivered</Text>
              </View>
            </View>

            <View style={styles.justifyContent}>
              <Image source={images.line2} />
            </View>

            <View style={styles.rowStyle}>
              <View style={styles.datecardStyle}>
                <Text style={[styles.fontStyle, , styles.boldStyle]}>25</Text>
                <Text style={styles.fontStyle}>Rejected</Text>
              </View>
            </View>

            <View style={styles.justifyContent}>
              <Image source={images.line2} />
            </View>

            <View style={styles.rowStyle}>
              <View style={styles.datecardStyle}>
                <Text style={[styles.fontStyle, , styles.boldStyle]}>13</Text>
                <Text style={styles.fontStyle}>Cancelled</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.maincardStyle}>
          <View style={styles.rowStyle}>
            <View>
              <Text style={styles.dateheadingStyle}>06 April, 2021</Text>
              <Image source={images.line1}></Image>
            </View>

            <View style={styles.datesStyle}>
              <Text style={[styles.fontStyle, , styles.boldStyle]}>02:00</Text>
              <Text style={styles.fontStyle}> PM</Text>
              <Text> - </Text>
              <Text style={[styles.fontStyle, , styles.boldStyle]}>06:00</Text>
              <Text style={styles.fontStyle}> PM</Text>
            </View>
          </View>

          <View style={[styles.headericonStyle, {width: '100%'}]}>
            <View style={styles.rowStyle}>
              <View style={styles.datecardStyle}>
                <Text style={[styles.fontStyle, , styles.boldStyle]}>10</Text>
                <Text style={styles.fontStyle}>Delivered</Text>
              </View>
            </View>

            <View style={styles.justifyContent}>
              <Image source={images.line2} />
            </View>

            <View style={styles.rowStyle}>
              <View style={styles.datecardStyle}>
                <Text style={[styles.fontStyle, styles.boldStyle]}>25</Text>
                <Text style={styles.fontStyle}>Rejected</Text>
              </View>
            </View>

            <View style={styles.justifyContent}>
              <Image source={images.line2} />
            </View>

            <View style={styles.rowStyle}>
              <View style={styles.datecardStyle}>
                <Text style={[styles.fontStyle, styles.boldStyle]}>13</Text>
                <Text style={styles.fontStyle}>Cancelled</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.maincardStyle}>
          <View style={styles.rowStyle}>
            <View>
              <Text style={styles.dateheadingStyle}>06 April, 2021</Text>
              <Image source={images.line1}></Image>
            </View>

            <View style={styles.datesStyle}>
              <Text style={[styles.fontStyle, , styles.boldStyle]}>02:00</Text>
              <Text style={styles.fontStyle}> PM</Text>
              <Text> - </Text>
              <Text style={[styles.fontStyle, , styles.boldStyle]}>06:00</Text>
              <Text style={styles.fontStyle}> PM</Text>
            </View>
          </View>

          <View style={[styles.headericonStyle, {width: '100%'}]}>
            <View style={styles.rowStyle}>
              <View style={styles.datecardStyle}>
                <Text style={[styles.fontStyle, , styles.boldStyle]}>10</Text>
                <Text style={styles.fontStyle}>Delivered</Text>
              </View>
            </View>

            <View style={styles.justifyContent}>
              <Image source={images.line2} />
            </View>

            <View style={styles.rowStyle}>
              <View style={styles.datecardStyle}>
                <Text style={[styles.fontStyle, styles.boldStyle]}>25</Text>
                <Text style={styles.fontStyle}>Rejected</Text>
              </View>
            </View>

            <View style={styles.justifyContent}>
              <Image source={images.line2} />
            </View>

            <View style={styles.rowStyle}>
              <View style={styles.datecardStyle}>
                <Text style={[styles.fontStyle, styles.boldStyle]}>13</Text>
                <Text style={styles.fontStyle}>Cancelled</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.maincardStyle}>
          <View style={styles.rowStyle}>
            <View>
              <Text style={styles.dateheadingStyle}>06 April, 2021</Text>
              <Image source={images.line1}></Image>
            </View>

            <View style={styles.datesStyle}>
              <Text style={[styles.fontStyle, , styles.boldStyle]}>02:00</Text>
              <Text style={styles.fontStyle}> PM</Text>
              <Text> - </Text>
              <Text style={[styles.fontStyle, , styles.boldStyle]}>06:00</Text>
              <Text style={styles.fontStyle}> PM</Text>
            </View>
          </View>

          <View style={[styles.headericonStyle, {width: '100%'}]}>
            <View style={styles.rowStyle}>
              <View style={styles.datecardStyle}>
                <Text style={[styles.fontStyle, , styles.boldStyle]}>10</Text>
                <Text style={styles.fontStyle}>Delivered</Text>
              </View>
            </View>

            <View style={styles.justifyContent}>
              <Image source={images.line2} />
            </View>

            <View style={styles.rowStyle}>
              <View style={styles.datecardStyle}>
                <Text style={[styles.fontStyle, styles.boldStyle]}>25</Text>
                <Text style={styles.fontStyle}>Rejected</Text>
              </View>
            </View>

            <View style={styles.justifyContent}>
              <Image source={images.line2} />
            </View>

            <View style={styles.rowStyle}>
              <View style={styles.datecardStyle}>
                <Text style={[styles.fontStyle, styles.boldStyle]}>13</Text>
                <Text style={styles.fontStyle}>Cancelled</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  mainheadingStyle: {
    paddingLeft: 20,
    paddingBottom: 20,
  },
  jobheadingStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 6,
  },
  maincardStyle: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F7F7F7',
    width: '90%',
    height: '25%',
    padding: 24,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: 20,
  },
  datecardStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  dateheadingStyle: {
    fontWeight: 'bold',
    paddingBottom: 6,
    fontSize: 15,
  },
  datesStyle: {
    display: 'flex',
    flexDirection: 'row',
  },
  headericonStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
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

export default JobExec;
