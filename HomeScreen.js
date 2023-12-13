import {useNavigation} from '@react-navigation/native';
import React from "react";
import { View, Text, 
SafeAreaView,Image,StyleSheet,ImageBackground,ScrollView,TextInput,TouchableOpacity
,Dimensions,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import courses from '../components/courses';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Home = () =>{
const navigation = useNavigation();
return (
<SafeAreaView style={{flex: 1}}>
<ImageBackground source={require('../assets/at.png')}
style={{width:"100%",height:"100%",position:'absolute'}}>

<Text style={{
paddingHorizontal:20,
fontSize:35,
paddingTop:40,
color:"#FFF"}}>
</Text>
<View style={{flexDirection:"row",
alignItems :"center",
backgroundColor:"#FFF",
padding:10,
borderRadius:12,
marginHorizontal:20,
marginTop:1
}}>
<TextInput placeholder="Search for new knowledge!"
placeholderTextColor="#345c74"
style={{
fontSize:12,
width:280,
paddingHorizontal:12,
}}
/>
<Icon name="search" size={25} style={{marginRight: 10}} />
</View>
<View style={{
flexDirection:"row",
backgroundColor:"pink",
marginTop:15,
marginHorizontal:20,
borderRadius:20,
paddingVertical:30,
paddingLeft:30
}}>
<View>
<Text style={{
color:"#345c74",
fontSize:20,
width:250,
paddingRight:100,
fontWeight:'bold',
}}>
Start learning new Staff
</Text>
<TouchableOpacity onPress={() =>
navigation.navigate('About')}
style={{
flexDirection:"row",
backgroundColor:"navy",
alignItems:"center",
marginTop:20,
width:160,
paddingVertical:10,
borderRadius:14,
paddingHorizontal:10,
}}>
<Text style={{
color:"white",
fontSize:15,
fontWeight:'bold',
padding:10
}}>Categories 
</Text>
<Icon name="search" size={15}
style={{padding:10,color:'white'}} />
</TouchableOpacity>
</View>
<Image
source={require('../assets/w.png')}
style={{marginTop:15,height:105 , width:100}}/>
</View>
<Text style={{color:"pink",
fontSize:20,
paddingHorizontal:20,
marginTop:10,
marginBottom:5,
}}>Courses in progress</Text>
<View style={{flex: 2,paddingHorizontal:20,}}>
<FlatList showsVerticalScrollIndicator={false}
numColumns={2}
data={courses}
keyExtractor={(item, index) => index.toString()}
renderItem={({item}) => <CourseCard course={item}
/>}
/></View>
<View style={styles.bottom}>
<ScrollView style={styles.scrollView}
horizontal>
<View style={styles.nav}>
<Icon name="home" size={25} color="white"
/>
<Icon.Button name="book" size={25}
color={"pink"}backgroundColor={"slateblue"}
onPress={() =>
navigation.navigate('About')}/>
<Icon.Button name="user" size={25}
color={"pink"}backgroundColor={"slateblue"}
onPress={() =>
navigation.navigate('Profile')}/>
</View>
</ScrollView>
</View>
</ImageBackground>
</SafeAreaView>
);
};
const CourseCard = ({course}) => {
const navigation = useNavigation();
return (
<TouchableOpacity
activeOpacity={0.8}
onPress={() =>
navigation.navigate('CourseScreen', {data: course})}>
<ImageBackground
source={course.image}
style={{
marginVertical: 10,
marginHorizontal: 5,
borderRadius: 50,
width: windowWidth / 2 - 30,
height: windowHeight / 5,
paddingTop: 25,
paddingLeft: 20,
borderRadius: 15,
overflow: 'hidden',
}}>
<Text
style={{
fontSize: 20,
fontWeight: 'bold',
paddingBottom: 5,
}}>{course.name}
</Text>
<Text style={{color: '#8F95B2', fontWeight:
'600'}}>
{course.totalCourse + ' Courses'}
</Text>
</ImageBackground>
</TouchableOpacity>
);
};
export default Home;
const styles = StyleSheet.create({
bottom:{
marginRight:-10,
borderRadius:82,
alignItems:'center',
justifyContent:'center'
},
nav:{
flexDirection:'row',
backgroundColor:'slateblue',
justifyContent:'space-evenly',
width:445,
height:60,
padding:10,
borderRadius:82,
},
});
