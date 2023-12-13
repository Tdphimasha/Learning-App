import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  View,
  Text,
  ImageBackground,
  FlatList,
  SafeAreaView,
  Image,Video,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CourseScreen = ({route}) => {
  const {data} = route.params;

  const BottomNavigationBar = () => {
    const navigation = useNavigation();

    return (
      <View
        style={{
          height: 80,
          bottom: 0,
          zIndex: 100,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
       
        <View
          style={{
            flexDirection:'row',
                                          backgroundColor:'slateblue',
                                          justifyContent:'space-evenly',
                                          width:450,
                                          height:60,
                                          padding:10,
                                          borderRadius:82,
          }}>
                                        <Icon name="home" size={25} color="pink" />
                                        <Icon.Button name="book" size={25} color={"pink"}backgroundColor={"slateblue"}
                                        onPress={() => navigation.navigate('About')}/>
                                         <Icon.Button name="user" size={25} color={"pink"}backgroundColor={"slateblue"}
                                        onPress={() => navigation.navigate('User')}/>
        </View>
      </View>
    );
  };

  const CourseContentList = ({content, index}) => {
    const navigation = useNavigation();

    return (
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          flexDirection: 'row',
        }}>
      <Text style={{fontSize: 40, fontWeight: 'bold', color: '#E4E7F4'}}>
          {'0' + (index + 1)}
        </Text>
        <View style={{paddingHorizontal: 20, flex: 1}}>
          <Text
            style={{
              fontSize: 15,
              color: '#A0A5BD',
              fontWeight: '500',
              marginBottom: 5,
            }}>
            {content.time}
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            {content.title}
          </Text>
        </View>
        <View
          style={{
            width: 55,
            backgroundColor: 'yellow',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon.Button name="location-arrow" style={{ backgroundColor:'navy'}}
          onPress={() => navigation.navigate('Browser')}
           ></Icon.Button>
    

        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <ImageBackground
        source={data.image}
        style={{
          height: 400,
          paddingRight: 20,
          paddingLeft: 20,
        }}>
        <Image
          resizeMode="contain"
          style={{
            height:145,
            width:150,
            paddingLeft: 420,
            marginTop:50
          }}
          source={require('../assets/w.png')}
        />
       
      </ImageBackground>
      <View
        style={{
          flex: 1,
          marginTop: -35,
          backgroundColor: '#fff',
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          height: '100%',
        }}>
        <Text
          style={{
            marginTop: 40,
            marginBottom: 20,
            marginHorizontal: 20,
            fontSize: 21,
            fontWeight: 'bold',
          }}>
          Course Content
        </Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.courseContent}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <CourseContentList index={index} content={item} />
          )}
        />
         <FlatList
          showsVerticalScrollIndicator={false}
          data={data.courseContent1}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <CourseContentList index={index} content={item} />
          )}
        />
         <FlatList
          showsVerticalScrollIndicator={false}
          data={data.courseContent2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <CourseContentList index={index} content={item} />
          )}
        />
         <FlatList
          showsVerticalScrollIndicator={false}
          data={data.courseContent3}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <CourseContentList index={index} content={item} />
          )}
        />
      </View>
      <BottomNavigationBar />
    </SafeAreaView>
  );
};

export default CourseScreen;