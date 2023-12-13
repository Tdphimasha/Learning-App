import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { Button, View, Text, 
SafeAreaView,ScrollView,Image,StyleSheet,ImageBackground,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Profile = () =>{
const navigation = useNavigation();
return (
<SafeAreaView>
<ImageBackground source={require('../assets/hmy.png')}>
<Text style={{fontSize: 32, 
marginTop:75,textAlign:'center',color:"white"}}>Profile</Text>
<View style={{alignItems:'center'}}>
<View style={styles.databox}>
<Image style={{
height:95,
width:70,
}}
source={require('../assets/user.png')}
/>
<Text style={{fontSize: 20,color:'black'}}>
User
</Text>
</View>
</View>
<View>
<TextInput
style={styles.inputStyle}
placeholder="First Name" //dummy@abc.com
placeholderTextColor="#8b9cb5"
underlineColorAndroid="#f000"
blurOnSubmit={false}
/>
</View>
<View>
<TextInput
style={styles.inputStyle}
placeholder="Last Name" //dummy@abc.com
placeholderTextColor="#8b9cb5"
keyboardType="default"
underlineColorAndroid="#f000"
blurOnSubmit={false}
/>
</View>
<View>
<TextInput
style={styles.inputStyle}
placeholder="Last Name" //dummy@abc.com
placeholderTextColor="#8b9cb5"
keyboardType="default"
underlineColorAndroid="#f000"
blurOnSubmit={false}
/>
</View>
<View>
<TextInput
style={styles.inputStyle}
placeholder="Email Address " //dummy@abc.com
placeholderTextColor="#8b9cb5"
keyboardType="default"
underlineColorAndroid="#f000"
blurOnSubmit={false}
/>
</View>
<View>
<TextInput
style={styles.inputStyle}
placeholder="Last Name" //dummy@abc.com
placeholderTextColor="#8b9cb5"
keyboardType="default"
underlineColorAndroid="#f000"
blurOnSubmit={false}
/>
</View>
<View style={styles.bottom}>
<ScrollView style={styles.scrollView} horizontal>
<View style={styles.nav}>
<Icon.Button name="home" size={25} color="pink"
backgroundColor={"slateblue"} onPress={() => navigation.navigate('Home')} />
<Icon.Button name="book" size={25}
color={"pink"}backgroundColor={"slateblue"}
onPress={() => navigation.navigate('About')}/>
<Icon.Button name="user" size={25}
color={"white"}backgroundColor={"slateblue"}
onPress={() => navigation.navigate('Profile')}/>
</View>
</ScrollView>
</View>
</ImageBackground>
</SafeAreaView>
);
};
export default Profile;
const styles = StyleSheet.create({
bottom:{
borderRadius:82,
alignItems:'center',
justifyContent:'center',
},
nav:{
flexDirection:'row',
backgroundColor:'slateblue',
justifyContent:'space-evenly',
width:459,
height:65,
padding:10,
borderRadius:82,
marginBottom:25,
marginTop :45,
},
databox:{
height:173,
width:180,
borderColor:'lightsteelblue',
borderWidth:5,
borderRadius:150,
alignItems:'center',
justifyContent:'center',
marginTop :25,
backgroundColor:'white'
},
inputStyle: {
color: 'white',
paddingLeft: 15,
paddingRight: 15,
borderWidth: 1,
borderRadius: 30,
borderColor: '#dadae8',
marginTop:40,
height:41
},
});
