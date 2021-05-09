import React from 'react';
import { ImageBackground,StyleSheet, View,Image,Text } from 'react-native';

function Welcome(props) {
    return (
       <ImageBackground 
       style={styles.background} 
       source={require('../assets/background.jpg')}>
           <View style={styles.logoContainer} >
                <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
                <Text>Sell what you want.</Text>
           </View>
       
           <View style={styles.loginbtn}></View>
           <View style={styles.registerbtn}></View>
       </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    loginbtn:{
        width:"50%",
        height:70,
        backgroundColor:"#fc5c65"
    },
    registerbtn:{
        width:"50%",
        height:80,
        backgroundColor:"#4ecdc4"
    },
    logo:{
        width:100,
        height:100,
        top:20,
        position:'absolute'
    },
    logoContainer:{
        top:20,
        position:'absolute',
        alignItems:"center"
    }
})
export default Welcome;