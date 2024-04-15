import { StatusBar } from 'expo-status-bar';
import { useState, useLayoutEffect, useEffect } from 'react';
import { StyleSheet, 
  Text, 
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList
  } from 'react-native';

  import axios from 'axios';

  global.font=12;

  import AsyncStorage from "@react-native-async-storage/async-storage";

  import CustomHook from './CustomHook';

  import GETAPICustomHook from './GETAPICustomHook';

  import APIHook from './APIHook';
  import POSTAPIHook from './POSTAPIHook';

  const GLOBAL = require("./Globals");

export default function Home({navigation}) {
  
  // let getmoviesurl = GLOBAL.MovieBase_URL+'movies.json';
  // const {mydata} = APIHook(getmoviesurl);
  // const {login} = POSTAPIHook();
 
    // const {mydata} = GETAPICustomHook()
    // const {dataClone, getMoviesClone} = CustomHook('https://reactnative.dev/movies.json');
    const[myfont, setMyfont] = useState(12);

    const onPress = ()=>{
        // navigation.navigate('Register',{data:'I am Setting Screen'});

        // global.font = myfont;
        // global.font=global.font+10;

        global.font=global.font+2;
        console.log(global.font);
        setMyfont(myfont+80);

    }
    
  
  // useEffect(()=>{

  //   global.flag=10;
  //   const unsubscribe = navigation.addListener('focus', ()=>{
  //     console.log('Navigation useEffect is Called')
  //   })
  //   return unsubscribe;
  // },[navigation])

  // useEffect(()=>{
  //   return()=>{
  //     console.log('Going Back');
  //     // Alert.alert('You wanna go back');
  //   }
  // },[])


  // const[data, setData] = useState();
  
  const data = [{"id": "1", "releaseYear": "1977", "title": "Star Wars"}, {"id": "2", "releaseYear": "1985", "title": "Back to the Future"}, {"id": "3", "releaseYear": "1999", "title": "The Matrix"}, {"id": "4", "releaseYear": "2010", "title": "Inception"}, {"id": "5", "releaseYear": "2014", "title": "Interstellar"}]

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      console.log('Kia ham yahaan hain ?');
      console.log(json.movies[5]);
      setData(json.movies);
      // console.log(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      // setLoading(false);
    }
  };

  const postAPITesting = async () => {
    // console.log('posAPITesting');
    
    // const signInurl = 'https://dev.iqrakitab.net/api/login';
    // const signInParams = {
    //   email:"testakhn@gmail.com",
    //   password:"12345678"
    //   }

    // const headers = {
    //   'Content-Type':'application/json'
    //   }
    // axios.post(url,params,{
    //   headers:headers
    // }).then(res=>{
    //   console.log('Success', res.data)
    // }).catch(err=>{
    //   console.log('Error',err)
    // })
    
    // Sign Up Post API

   

    
    // Sign In Post API
    // axios
    //   .post(signInurl, signInParams, {
    //     headers: {
    //       Accept: "application/json",
    //       // Authorization: global.userData?.token ? global.userData.token : "",
    //     },
    //   })
    //   .then(function (response) {
    //     console.log("response.data==", response.data);
    //     // setreqStatus(response.data.status);
    //     // setResponse(response);
    //     // setLoading(false);
    //   })
    //   .catch(function (error) {
    //     console.log('What is error == ',error);
    //     // Alert.alert('Error')
    //   })


  }

  useEffect(() => {

    
      // Login API

      // let finalURL = GLOBAL.BASE_URL+'signin';
      
      // const signUpParams = {
      //   "email":"junaid@gmail.com",
      //   "password":"12345678"    
      // }
    

      // axios
      // .post(finalURL, signUpParams, {
      //   headers: {
      //     Accept: "application/json",
      //   },
      // })
      // .then(function (response) {

      //   console.log("We are Successful ==", response.data);
      //   // Alert.alert('USer Created Successfully');

      // })
      // .catch(function (error) {
      //   console.log('What is error == ',error.response.data.message);
      //   Alert.alert(error.response.data.message);
      // })

    // console.log('We are checking Global Values',GLOBAL.BASE_URL);
    
    // const movies=[{id:1, name:'Hello'},{id:1, name:'Hello'}]
    // AsyncStorage.setItem('moviesdata',JSON.stringify(movies))
    
    // AsyncStorage.getItem('moviesdata').then((data)=>{
    //   let originalform=JSON.parse(data);
    //   console.log('Data Fetch From Local DB',originalform);
    //   console.log('Data Fetch From Local DB [0]',originalform[0]);
    //   // console.log(data[0]);
    // })

    // getMovies();
    // postAPITesting();

    // const url = 'https://reactnative.dev/movies.json';
    
    // axios.get('https://reactnative.dev/movies.json').then((response)=>{
    //   console.log(response.data.movies[0]);
    //   setData(response.data.movies);
    // })

  }, []);

  return (
    <View style={styles.container}>
        <Text style={{fontSize:global.font}}> This is Home Screen {global.font} </Text>
    <View style={styles.logo}>

    <FlatList
        data={data}
        keyExtractor={item=>item.id}
        renderItem={({item})=>(
          
            <View style={{
              backgroundColor:'white', 
              marginBottom:10,
              height:60, 
              justifyContent:'center',
              alignItems: 'center',
              }}>
              
                 <Text style={{color:'black'}}> {item.id} </Text>
                <Text style={{color:'black'}}> {item.title} </Text>
                <Text style={{color:'grey'}}> {item.releaseYear} </Text>

            </View>
            
            )
        }
      />
    </View>

    <View style={styles.input}>
    </View>

      <View style={styles.buttons}>
        <TouchableOpacity onPress={onPress}>
            <Text style={{fontSize:40}}> Go to Next Screen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  logo:{
    // backgroundColor:'red',
    // flex:0.25,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  input:{
    // backgroundColor:'green',
    flex:0.50
  },
  buttons:{
    backgroundColor:'blue',
    flex:0.25,
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
