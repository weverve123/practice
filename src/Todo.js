import { View, Text, TextInput,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
// import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Todo() {
  return (
    <View style={styles.main}>
        <View style={styles.mainInput}>
           <TextInput placeholder='Enter the task' style={styles.textInput}/>
      </View>
     
        <TouchableOpacity
         onPress={()=> console.log("welcome")}
        >
         <View style={styles.addBtn}>
            <Text style={{fontSize:20,fontWeight:'bold',color:"white"}}>Add Task</Text>
         </View>
        </TouchableOpacity>
      
    </View>
    
  )
}

const styles=StyleSheet.create({
   main:{
     top:20,
     left:10,
     borderRadius:10,
     flex:1,
     
   },
   textInput:{
     width:300,
     backgroundColor:"#D3D3D3",
    
   },
   mainInput:{
    justifyContent:"center",
    alignItems:"center"
   },
   addBtn:{
    justifyContent:"center",
    alignItems:"center",
    bottom:0,
    marginTop:30,
    height:40,
    width:200,
    backgroundColor:"green",
    left:80
   }
})