import { View, Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Login from './Login';
import Home from './Home';
import { getDatabase } from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export default function SignUp({navigation}) {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [message,setMessage]=useState('');

  const handleLoin= async()=>{
    try{
        const isUserCreated =await auth().createUserWithEmailAndPassword(
          email,
          password
          );
       console.log(isUserCreated);
       
    }
    catch(err)
    {
       console.log(err);
       setMessage(err.message);
    }
  }
  return (
    <View style={styles.main}>
       <View>
        <Text style={styles.heading}>SignUp</Text>
       </View>
       <View>
         <TextInput placeholder='Email' 
          value={email}
          onChangeText={text =>setEmail(text)}
          style={styles.input}/>

         <TextInput placeholder='Password'
          value={password}
          onChangeText={text =>setPassword(text)}
          secureTextEntry={true}
         style={[styles.input,{top:20}]}/>

       </View>
       <TouchableOpacity 
        onPress={()=>handleLoin()}
       >
         <View style={{marginTop:40,height:40,width:200,justifyContent:"center",alignItems:"center",backgroundColor:'red',borderRadius:20}}>
            <Text style={{color:"white",fontSize:20}}>SignUp</Text>
         </View>
       <Text>{message}</Text>
       </TouchableOpacity>

       <TouchableOpacity
        onPress={()=>navigation.navigate(Login)}
       >
         <View style={{marginTop:20}}>
            <Text style={{fontSize:20,color:"black"}}>Login</Text>
         </View>
       </TouchableOpacity>
    </View>
  
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    input:{
        width:320,
        backgroundColor:"#D3D3D3",
        height:40
    },
    heading:{
        fontSize:30,
        fontWeight:'bold',
        color:"black",
        bottom:20
    }
});