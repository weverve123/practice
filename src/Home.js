import { View, Text,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import SignUp from './SignUp';
import Todo from './Todo';
// import { useRoute } from '@react-navigation/native';

export default function Home({navigation}) {
  //  const route =useRoute();
  //  const {email,uid}=route.params                                           

  const hadleLogOut= async() =>{
    try {  
      const isUserLogin =await auth().signOut()
      navigation.navigate(SignUp);
      console.log("Hello")
    }
    catch(err)
    {
       console.log(err);
    }
  
  }
  return (
    <View style={styles.main}>
      <Text style={styles.Heading}>Welcome To Home Page.</Text>
      {/* <Text>Email :{email}</Text>
      <Text>uid:{uid}</Text> */}
      <TouchableOpacity
       onPress={()=>hadleLogOut()}
      >
        <View style={styles.logOutBtn}>
           <Text style={styles.btnText}>LogOut</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
       onPress={()=>navigation.navigate(Todo)}
      >
         <View style={styles.todoBtn}>
           <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Make Your Todo</Text>
         </View>
      </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
   main:{
    justifyContent:"center",
    alignItems:"center",
    flex:1
   },
   Heading:{
    fontSize:20,
    fontWeight:"bold",
    color:"black"
   },
   logOutBtn:{
    top:20,
    height:40,
    width:100,
    backgroundColor:"red",
    justifyContent:"center",
    alignItems:"center"
   },
   btnText:{
    color:"white", 
    fontSize:20,
    fontWeight:"bold"

   },
   todoBtn:{
      height:50,
      top:40,
      width:250,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#A020F0",
      borderRadius:20
      
   }
})