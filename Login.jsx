import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, 
  Text, 
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
  } from 'react-native';

export default function Login({navigation}) {

    const onPress = ()=>{
        navigation.navigate('Dashboard',{data:"I am Coming from Login Screen"});
    }

    const [data, setData] = useState();
    
  return (
    <View style={styles.container}>
        <Text> This is Login Screen </Text>
        <Text> This is Login Screen </Text>
        <Text> This is Login Screen </Text>
        <Text> This is Login Screen </Text>
        <Text> This is Login Screen </Text>
        <Text> This is Login Screen </Text>
        <Text> This is Login Screen </Text>
        <Text> This is Login Screen </Text>
        <Text> This is Login Screen </Text>

    <View style={styles.logo}>

    <Image
        style={styles.tinyLogo}
        source={require('./assets/favicon.png')}
      />


    </View>

    <View style={styles.input}>

    </View>

      <View style={styles.buttons}>

           <TouchableOpacity onPress={onPress}>
            <Text style={{fontSize:30, color:'white'}}>Go to Next Screen</Text>
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
    flex:0.25,
    alignItems: 'center',
    justifyContent: 'center',
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
