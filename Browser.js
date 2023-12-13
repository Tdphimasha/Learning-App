import React from 'react';
import { Dimensions, StyleSheet,  Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Browser = () =>{
    const navigation = useNavigation();

    Linking.openURL('https://W3Schools.com');
  }

export default Browser;



