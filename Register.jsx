import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import { useState, useLayoutEffect, useEffect } from 'react';
import { StyleSheet, 
  Text, 
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
  SectionList
  } from 'react-native';

  import Top from './Top';
  import Card from './Card';
  import Score from './Score';

  import CustomFlatList from './CustomFlatList';

  var c = 15;

  import APIHook from './APIHook';

import {auth} from "./firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, onAuthStateChanged } from "firebase/auth";

export default function Register({navigation, route}) {

  // const {mydata} = APIHook('https://reactnative.dev/movies.json')

  console.log('Top AREA');

  console.log(global.font)

  useLayoutEffect(() => {
    // console.log('useLayout Effect');
  // console.log('MessagesScreen',route.params.data);
    navigation.setOptions({
    title: 'Register Screen',
    headerLeft: () => (
      <TouchableOpacity
        style={{ 
          marginRight: 20, 
          // backgroundColor: 'blue' 
          }}
        onPress={() => navigation.pop()}
      >

                  <Text> Back Button </Text>
        
                  {/* <MaterialCommunityIcons
          name='chevron-left'
          color={'white'}
          size={30}
        /> */}
      </TouchableOpacity>
    ),
    // headerRight: () => (
    // 	<View
    // 		style={{
    // 			marginRight: 10,
    // 			alignItems:'center',
    // 			justifyContent:'center'
    // 		}}
    // 	>
    // 	<TouchableOpacity
    // 		onPress={() => navigation.pop()}
    // 		style={{
    // 			// backgroundColor: 'blue',
    // 			alignItems:'center',
    // 			justifyContent:'center'
    // 		}}
    // 	>

          //         <Text> Right Side </Text>
    // 		{/* <MaterialCommunityIcons
    // 			name='android-messages'
    // 			color={'white'}
    // 			size={30}
    // 		/> */}

    // 		{/* <Image style={{width:25, height:25, marginBottom:3}} source={require("../../assets/icons/chat-room-icon.png")} /> */}

    // 		<Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>
    // 			Chats
    // 		</Text>
    // 	</TouchableOpacity>
    // 	</View>
    // ),
  });
}, [navigation]);
  
  const [store, setStore] = useState(12);
  const [count, setCount] = useState(12);
  const [score, setScore] = useState(10);

  const [font, setFont] = useState(16);

  console.log(global.font)
    
    const onItemClick = (item) =>{
      console.log('Item is =', item);
    }

    const data = [
      {key:0, title:'Rizwan', msg:'Hello how are you', time:'11:52', unread:'4'},
      {key:1, title:'Ali', msg:'Hello how are you', time:'11:52', unread:'4'},
      {key:2, title:'Areeb', msg:'Hello how are you', time:'11:52', unread:'4'},
    ];

    const sectionData = [
      {key:'0', title:'Pakistan', data:[{key:0, title:'Lahore'},{key:1, title:'Karachi'}]},
      {key:'1', title:'Afghanistan', data:[{key:0, title:'Kabul'},{key:1, title:'Kandhar'},{key:2, title:'Ningarhaar'}]},
      {key:'2', title:'Iran', data:[{key:0, title:'Tehran'}]},
    ];

  useEffect(()=>{
    
    const unsubscribe = navigation.addListener('focus', ()=>{
      console.log('We are Back')
      // console.log(global.font);
      // setCount(global.font);
    })


    return unsubscribe;
  },[navigation])

  useEffect(()=>{
    console.log('useEffect');

    console.log(global.font)

  })

  useEffect(()=>{
    console.log('useEffect []');
    // Fetch Data From CricInfo
    // setScore(score+12);

  },[])

  // useEffect(()=>{
  //   console.log('useEffect [store]');
  // },[store])

  // useEffect(()=>{
  //   console.log('useEffect [count]');
  // },[count])

  // useEffect(()=>{
  //   console.log('useEffect [count, store]');
  // },[count, store])

  const onPressRegister = async ()=>{
    await createUserWithEmailAndPassword(auth, 'uzair@gmail.com', '123456')
    .then((userCredential) => {
      console.log("Succesfull",userCredential);
      navigation.navigate('Home');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error Code == ',errorCode)
      console.log('Error Message == ',errorMessage)
      // ..
    });
  }

  const onPressLogin = async ()=>{
       await signInWithEmailAndPassword(auth, 'akhzar@gmail.com', '123456')
      .then((userCredential) => {
        // Signed in
        console.log("user data,", userCredential.user);
        const user = userCredential.user;
        // console.log("user data,", user.uid);
        // console.log("stsTokenManager", user.stsTokenManager.accessToken);

        // ...
        // AsyncStorage.setItem("myuser", JSON.stringify(user));
        navigation.navigate('Home');
        })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("My Error,", errorMessage);
        // ..
      });
  }

  const onPressAnonymous = async ()=>{
    
    await signInAnonymously(auth).then((userCredential)=>{
      // console.log('Done',userCredential.user.stsTokenManager.accessToken)
      console.log(userCredential.user);
      navigation.navigate('Home');
    })
  }

  return (
    
    <View style={styles.container}>
    
      {console.log('return')}
    
      <Text style={{fontSize:global.font}}> 
       Font is double = {global.font}
      </Text>
    {/* <CustomFlatList data={myData}/> */}

    <FlatList
        data={data}
        keyExtractor={item=>item.key}
        renderItem={({item})=>(
                    
            <View style={{
              backgroundColor:'white', 
              // alignItems:'center', 
              // justifyContent:'center',
              marginBottom:10,
              height:60, 
              flex:1,
              flexDirection:'row'
              }}>
              
              <View style={{flex:0.50, backgroundColor:'grey'}}>

              <Text style={{color:'white'}}> {item.title} </Text>
              <Text style={{color:'white'}}> {item.msg} </Text>

              </View>
              <View style={{flex:0.50, backgroundColor:'green', alignItems:'flex-end'}}>

              <Text style={{color:'white'}}> {item.time} </Text>
              <Text style={{color:'white'}}> {item.unread} </Text>
              </View>


             

            </View>
            
            
            )
        }
      />
    
    {/* <SectionList
          sections={sectionData}
          keyExtractor={item=>item.key}
          renderSectionHeader={({ section: { title } }) => (
            <View style={{backgroundColor:'grey'}}>
            <Text>{title}</Text>
            </View>
          )}
          renderItem={({item}) => (
            <View style={{backgroundColor:'green', height:40, marginBottom:10, flex:1, flexDirection:'row'}}>
            <View style={{ flex:'50%'}}>
            <Text style={{color:'white'}}> {item.title} </Text>
            <Text style={{color:'white'}}> {item.class} </Text>
            </View>
            <View style={{flex:'50%', alignItems: 'right',justifyContent: 'right',}}>
            <Text style={{color:'white'}}> {item.time} </Text>
            </View>
            </View>
          )}
        /> */}


      <View style={styles.buttons}>
        <TouchableOpacity onPress={onPressRegister}>
          <Text style={{fontSize:40, color:'white'}}> Register </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressLogin}>
          <Text style={{fontSize:40, color:'white'}}> Login </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressAnonymous}>
          <Text style={{fontSize:40, color:'white'}}> Anonymous </Text>
        </TouchableOpacity>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo:{
    flex:0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    flex:0.50,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor:'green'
  },
  buttons:{
    backgroundColor:'blue',
    flex:0.40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex: '25%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: '50%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: '25%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchablebutton:{
    color:'Black',
    backgroundColor:'yellow',
    fontSize:30
  },
  tinyLogo:{
    width:100,
    height:100
  },
  inputtext:{
    backgroundColor:'white',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
