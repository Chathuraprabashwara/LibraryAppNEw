import { useEffect, useRef, useState } from 'react';
import { StyleSheet,TouchableOpacity, Text, View, SafeAreaView, TextInput ,Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'
import styled from 'styled-components';
import OTPTextInput from 'react-native-otp-textinput'
import { setTSpan } from 'react-native-svg/lib/typescript/lib/extract/extractText';



const Separator = () => <View style={styles.separator} />;






export default function ForgetPassword2() {

    const [otpOpen,SetotpOpen] = useState(false)
    const [phoneNum,SetPhoneNum] = useState("+9471453536")

  return (
    
    <View style={styles.container}>
      <View>
          <View style={styles.back}>
 <TouchableOpacity>
 
 <Icon name= "arrow-left"  size ={22} />
 </TouchableOpacity>
      </View>
      <Text style={styles.heading}>Forgot Password</Text>
      </View>
     
      <View>
        <View>
          <Text style={styles.lable1}>Country</Text>
          <SafeAreaView>
            <TextInput
              style={styles.input1}
              //onChangeText={}
              //value={number}
              placeholder="Country"
              keyboardType="text"
            />
          </SafeAreaView>
        </View>
        <View>
          <Text style={styles.lable2}>Enter Mobile Number</Text>
          <SafeAreaView>
            <TextInput
              style={styles.input2}
              //onChangeText={}
              //value={number}
              placeholder=""
              keyboardType="text"
            />
          </SafeAreaView>
        </View>
       
      </View>
   
      {otpOpen ?
       <View style={styles.footerbg}>
       <View><Pressable onPress={()=>{SetotpOpen(false)}}><Text style={styles.close}>X</Text></Pressable></View> 
       <View style={styles.otp}>
        <Text style={styles.otpText} > {`Enter OTP sent to ${phoneNum}`}</Text>
<OTPTextInput
ref={e => (this.otpInput = e)}
  handleTextChange={(e)=>{e.length ==4 ? alert(e): ""}}
  tintColor={"white"}
  offTintColor={"white"}
  textInputStyle={{ borderColor:"black",borderWidth:4,borderRadius:5,backgroundColor:"white"}}
  containerStyle={{width:"100%"}}
  />
</View>
<View>
<Text style={styles.footerText2}>Didn’t get any ? <Text style={styles.linkTest2}> RESEND OTP</Text> </Text>
     
</View>
      </View> 
      
      :
      
      
      <>
       <View style={styles.btn}>
       <TouchableOpacity onPress={()=>{ SetotpOpen(true)}} style={styles.button} 
       // onPress={onPress}
       >
     <Text style={styles.text}>Send OTP</Text>
   </TouchableOpacity >
       </View>
       <View style={styles.footer}>
       <Separator />
       <Text style={styles.footerText}>Don't have an account?</Text>
       <TouchableOpacity onPress={() => Linking.openURL('https://example.com')}>
<Text style={styles.linkTest}>Register</Text>
</TouchableOpacity>
  </View>
  </>
      
      }
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  heading: {
    marginTop: "40%",
    fontSize: 25,
    marginLeft: "7%",
    fontFamily: "Poppins",
    fontWeight:500
  },
  lable1: {
    marginTop: "15%",
    marginLeft: "7%",
  },
  input1: {
    marginLeft: "7%",
    height: 47,
    margin: 12,
    borderWidth: 0.2,
    padding: 10,
    borderRadius: 5,
    borderColor: "black",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    padding: 10,
  },
  lable2: {
    marginTop: "5%",
    marginLeft: "7%",
  },
  input2: {
    marginLeft: "7%",
    height: 47,
    margin: 12,
    borderWidth: 0.2,
    padding: 10,
    borderRadius: 5,
    borderColor: "black",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 2,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#3C5898',
    width:300,
    marginLeft:"10%",
    marginTop:"10%"
   
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  separator: {
    marginVertical: 1,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width:300,
    marginHorizontal:40
  },
  footer:{
    marginVertical:180
  },
  footerText:{
    alignContent:"center",
    textAlign:"center",
    color:"#707070",
    marginVertical:20,
    fontWeight: 600,

  },
  linkTest:{
    textDecorationLine: 'underline',
    fontWeight: 600,
    color:"#3C5898",
    fontSize:18,
    textAlign:"center",
    marginVertical:-20
  },
  back:{
    position:"absolute",
    top:60,
    left:15
  },
  close:{
    position:"relative",
    right:20,
    textAlign:"right",
    color:"white",
    fontWeight:500,
    top:10
  },
  footerbg:{
    backgroundColor:"#3C5898",
    height:400,
    borderRadius:25,
    marginVertical:20
  },
  otp:{
    zIndex:3,
    width:300,
    position:'relative',
    top:10,
    backgroundColor:"#3C5898",
    left:38
  },
  otpText:{
    color:"white",
    fontWeight:800,
    textAlign:"center",
    marginBottom:10

  },
  footerText2:{
    alignContent:"center",
    textAlign:"center",
    color:"white",
    marginVertical:30,
    fontWeight: 600,

  },
  linkTest2:{
    textDecorationLine: 'underline',
    fontWeight: 600,
    color:"white",
    fontSize:15,
    textAlign:"center",
  }

});


