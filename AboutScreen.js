// Aboutscreen.js
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import { Button, View, Text, SafeAreaView,StyleSheet,ScrollView,Image, 
ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ReadMore from 'react-native-read-more-text';
const About = () =>{
const navigation = useNavigation();
return (
<SafeAreaView style={{flex: 1,}}>
<ImageBackground source={require('../assets/fg.jpg')}>
<ScrollView>
<Text style={{fontSize: 32, marginTop :45, 
textAlign:'center',color:'white',fontWeight:'bold'}}>Course List</Text>
<View style={{padding:15}}>
<View style={styles.databox}>
<Image style={{
height:95,
width:70,
}}
source={require('../assets/html.png')}
/>
<Text style={{fontSize: 20,color:'white'}}>
HTML 
</Text>
<Text style={{color:'pink'}}>
What is HTML?
HTML stands for Hyper Text Markup Language
HTML is the standard markup language for creating Web pages
HTML describes the structure of a Web page
HTML consists of a series of elements
HTML elements tell the browser how to display the content
HTML elements label pieces of content such as "this is a heading", "this is a 
paragraph", "this is a link", etc.
</Text>
</View>
<View style={styles.databox}>
<Image style={{
height:95,
width:180,
}}
source={require('../assets/02.png')}
/>
<Text style={{fontSize: 20,color:'white'}}>
React native 
</Text>
<Text style={{color:'pink'}}>
What is React?
React, sometimes referred to as a frontend JavaScript framework, is a JavaScript 
library created by Facebook.
React is a tool for building UI components.
React creates a VIRTUAL DOM in memory.
Instead of manipulating the browser's DOM directly, React creates a virtual DOM in 
memory,
React only changes what needs to be changed!
React finds out what changes have been made, and changes only what needs to be 
changed.
</Text>
</View>
<View style={styles.databox}>
<Image style={{
height:85,
width:150,
}}
source={require('../assets/sql.png')}
/>
<Text style={{fontSize: 20,color:'white',}}>
SQL
</Text>
<Text style={{color:'pink'}}>
SQL stands for Structured Query Language
SQL lets you access and manipulate databases
SQL became a standard of the American National 
Standards Institute (ANSI) in 1986, and of the International Organization for 
Standardization (ISO) in 1987
SQL can execute queries against a database
SQL can retrieve data from a database
SQL can insert ,Update,delete,records in a database
SQL can create new databases
SQL can create new tables in a database
SQL can set permissions on tables, procedures, and views
</Text>
</View>
<View style={styles.databox}>
<Image style={{
height:50,
width:170,
}}
source={require('../assets/pyt.png')}
/>
<Text style={{fontSize: 20,color:'white',}}>
Python
</Text>
<Text style={{color:'pink'}}>
Python is a popular programming language. It was created by Guido van 
Rossum,
and released in 1991.It is used for:
web development (server-side),software development,mathematics,system 
scripting.What can Python do?Python can be used on a server to create web 
applications.
Python can be used alongside software to create workflows.
Python can connect to database systems. It can also read and modify files.
Python can be used to handle big data and perform complex mathematics.
Python can be used for rapid prototyping, or for production-ready software 
development.
</Text>
</View>
<View style={styles.databox}>
<Image style={{
height:85,
width:150,
}}
source={require('../assets/ja.png')}
/>
<Text style={{fontSize: 20,color:'white',}}>
Java
</Text>
<Text style={{color:'pink'}}>
Java is a popular programming language, created in 1995.
It is owned by Oracle, and more than 3 billion devices run Java.It is 
used for:
Mobile applications (specially Android apps)
Desktop applications
Web applications
Web servers and application servers
Games
Database connection
And much, much more!
Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)
It is one of the most popular programming language in the world
It is easy to learn and simple to use
</Text>
</View>
<View style={styles.databox}>
<Image style={{
height:85,
width:150,
}}
source={require('../assets/php.png')}
/>
<Text style={{fontSize: 20,color:'white',}}>
PHP
</Text>
<Text style={{color:'pink'}}>
PHP is an acronym for "PHP: Hypertext Preprocessor"
PHP is a widely-used, open source scripting language

PHP can generate dynamic page content
PHP can create, open, read, write, delete, and close files on the server
PHP can collect form data
PHP can send and receive cookies
PHP can add, delete, modify data in your database
PHP can be used to control user-access
PHP can encrypt data

</Text>
</View>
<View style={styles.databox}>
<Image style={{
height:45,
width:150,
}}
source={require('../assets/kt.png')}
/>
<Text style={{fontSize: 20,color:'white',}}>
Kotlin
</Text>
<Text style={{color:'pink'}}>
Kotlin is a modern, trending programming language that was released in 2016 by JetBrains.

It has become very popular since it is compatible with Java (one of the most popular programming languages out there), which means that Java code (and libraries) can be used in Kotlin programs.

Kotlin is used for:

Mobile applications (specially Android apps)
Web development
Server side applications
Data science
And much, much more!

</Text>
</View>
<View style={styles.databox}>
<Image style={{
height:85,
width:150,
}}
source={require('../assets/vue.png')}
/>
<Text style={{fontSize: 20,color:'white',}}>
Vue js
</Text>
<Text style={{color:'pink'}}>
ue.js lets you extend HTML with HTML attributes called directives

Vue.js directives offers functionality to HTML applications

Vue.js provides built-in directives and user defined directives

Vue.js Directives
Vue.js uses double braces  as place-holders for data.

Vue.js directives are HTML attributes with the prefix v-


</Text>
</View>
<View style={styles.databox}>
<Image style={{
height:85,
width:300,
}}
source={require('../assets/fl.png')}
/>
<Text style={{fontSize: 20,color:'white',}}>
Flutter
</Text>
<Text style={{color:'pink'}}>
Control every pixel to create customized & 
adaptive designs that look great on any screen.
 Take control of your codebase with plugins, testing, dev tools & build high quality apps. Fast Development. Null Safe Code. Web Stable. Hot Reload. Mobile Ads SDK. Multi-Platform.


</Text>
</View>
</View>
<View style={styles.bottom}>
<ScrollView style={styles.scrollView} horizontal>
<View style={styles.nav}>
<Icon.Button name="home" size={25} color="pink"
backgroundColor={"slateblue"} onPress={() => navigation.navigate('Home')} />
<Icon.Button name="book" size={25}
color={"white"}backgroundColor={"slateblue"}
onPress={() => navigation.navigate('About')}/>
<Icon.Button name="user" size={25}
color={"pink"}backgroundColor={"slateblue"}
onPress={() => navigation.navigate('Profile')}/>
</View>
</ScrollView>
</View>
</ScrollView>
</ImageBackground>
</SafeAreaView>
);
};
export default About;
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
},
databox:{
height:353,
width:457,
borderColor:'#d090f0',
borderWidth:5,
borderRadius:70,
alignItems:'center',
justifyContent:'center',
marginTop :25,
paddingHorizontal:41
},
});
