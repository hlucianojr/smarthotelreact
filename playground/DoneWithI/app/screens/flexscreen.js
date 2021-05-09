import React from 'react';
import { StyleSheet,
    Button,
    Text,
    SafeAreaView,
    TouchableWithoutFeedback,
    Image,
    View,
    Alert,
    Dimensions,
    Platform } from 'react-native';
    
function flexscreen(props) {
    return (
        <View style={
            {
              backgroundColor:"blue",
             flexBasis:100,
             flexGrow:1,
             height:100
          }
          }>
              <View style={
                {
                  backgroundColor:"pink",
                  width:100,
                  height:300
                }
              }/>
              <View style={
            {
            backgroundColor:"green",
            width:100,
            height:100
          }}/>
          <View style={
            {
            backgroundColor:"gold",
            width:100,
            height:100
          }}/>
          
             <View style={
             {
              backgroundColor:'gray',
              width:100,
              height:100
           }}/>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
      backgroundColor:'gray'
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
  });
export default flexscreen;