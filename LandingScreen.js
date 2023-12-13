// Aboutscreen.js
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import { Button, View, Text, SafeAreaView,ImageBackground } from 'react-native';

const Land = () =>{
  const navigation = useNavigation();

    return (
        <SafeAreaView
      style={{
        flex:1
      }}>
        <ImageBackground source={require('../assets/rat.png')}
style={{width:"100%",height:"100%",position:'absolute'}}>        
          <View style={{ alignItems: 'center', justifyContent: 'center' , }}>
        <Text style={{fontSize: 32, marginTop:550 ,textAlign:'center'}}>Learn Coding Online
        {'\n'}for free</Text>
       

        </View>
    
    
        <View style={{alignItems: 'center', justifyContent: 'center' , fontSize:45,marginTop:80,backgroundColor:"navy",
                              alignItems:"center",
                              width:450,
                              borderRadius:54,
                              height:110,
                              marginLeft:15,
                              }}>
        <Button color = {"navy"} 
 onPress={() => navigation.navigate("LoginScreen")} title = "............ Login  ............."  />
        </View>
    
       
      </ImageBackground>
      </SafeAreaView>
    );
};

export default Land;