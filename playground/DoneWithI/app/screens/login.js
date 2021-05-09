import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
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

import {useDimensions,useDeviceOrientation} from '@react-native-community/hooks';

export default function LoginView() {
  console.log("App Execution");
  //console.log(Dimensions.get("screen"));

  console.log(useDimensions());
  console.log("-------------");
  console.log(useDeviceOrientation());

  const {landscape} = useDeviceOrientation();

  let x=1;
  const Separator = () => (
    <View style={styles.separator} />
  );
//uiview
  return (
    <SafeAreaView style={styles.container}>
    
    <View style={{ backgroundColor:'blue', width:'50%', height:landscape ? "100%":"30%"}}>

    </View> 
      <Separator />
    <View>
      <Text style={styles.title}>
        The title and onPress handler avvvre required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
      </Text>
      <Image source={require('./assets/icon.png')} style={styles.tinyLogo}/>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <TouchableWithoutFeedback onPress={()=>{ console.log('hec imga press the man')}}>
       <Image blurRadius={10} source={{uri:'https://picsum.photos/200/300', width:200, height: 50}}/>
       </TouchableWithoutFeedback>
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Adjust the color in a way that looks standard on each platform. On  iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button.
      </Text>
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        All interaction for the component are disabled.
      </Text>
      <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        This layout strategy lets the title define the width of the button.
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.prompt('title','message',(text)=>console.log(text))}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('title','message',[{text:"yes",onPress:()=> console.log("yes") },{text:"no"}])}
        />
      </View>
    </View>
  </SafeAreaView>
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
