import { View, Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Home from './Home'
import SignUp from './SignUp';
import { getDatabase } from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export default function Login({navigation}) {
   
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [message,setMessage]=useState('');
  


  const handleLogin= async() =>{
    try {
     if(email.length>0 && password.length >0)
     {
      const isUserLogin =await auth().signInWithEmailAndPassword(
        email,
        password,
      )
      console.log(isUserLogin);
      navigation.navigate('Home'
      //   {
      //   email:isUserLogin.user.email,
      //   uid:isUserLogin.user,uid,
      // }
      );
      console.log("Hello")
     }
     else{
      alert("Please enter the field ")
     }
    }
    catch(err)
    {
       console.log(err);
      //  setMessage(err.message);
      alert("User is Not ragister ...plz ragister user");
    }
    
  }
  return (
    <View style={styles.main}>
       <View>
        <Text style={styles.heading}>Login</Text>
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
        onPress={()=>handleLogin()}
       >
         <View style={{marginTop:40,height:40,width:200,justifyContent:"center",alignItems:"center",backgroundColor:'red',borderRadius:20}}>
            <Text style={{color:"white",fontSize:20}}>Login</Text>
         </View>
      
       </TouchableOpacity>

       <View style={{top:10,bottom:10}}>
        <Text style={{fontSize:10,fontWeight:"bold",color:"red"}}>
          {message}
        </Text>
       </View>
       <TouchableOpacity 
         onPress={()=>navigation.navigate(SignUp)}
       >
         <View style={{marginTop:20}}>
            <Text style={{fontSize:15,color:"blue",fontWeight:"bold"}}>New User SignUp ?</Text>
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