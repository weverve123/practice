import { View, Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Home from './Home'
import SignUp from './SignUp';
import { getDatabase } from '@react-native-firebase/database';

export default function Login({navigation }) {
   
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
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
        onPress={()=>navigation.navigate(Home)}
       >
         <View style={{marginTop:40,height:40,width:200,justifyContent:"center",alignItems:"center",backgroundColor:'red',borderRadius:20}}>
            <Text style={{color:"white",fontSize:20}}>Login</Text>
         </View>
      
       </TouchableOpacity>

       <TouchableOpacity 
         onPress={()=>navigation.navigate(SignUp)}
       >
         <View style={{marginTop:20}}>
            <Text style={{fontSize:20,color:"black"}}>SignUp</Text>
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