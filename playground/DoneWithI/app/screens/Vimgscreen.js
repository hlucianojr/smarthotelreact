import React from 'react';
import { View,StyleSheet ,Image} from 'react-native';

import colors from '../config/colors'

function Vimgscreen(props) {
    return (
        <View style={{backgroundColor:'#000',flex:1, width:'100%',height:'100%' }}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
           <Image resizeMode="contain" style={{width:'100%', height:'100%'}} source={require('../assets/chair.jpg')} />
        </View>
    );
}
const styles = StyleSheet.create({
    background:{
        backgroundColor:"#fc5c65",
    },
    closeIcon:{
        width:50,
        height:50,
        backgroundColor:colors.primary,
        position:'absolute',
        top:40,
        left:30,
    },
    deleteIcon:{
        width:50,
        height:50,
        backgroundColor:'#4ecdc4',
        position:'absolute',
        top:40,
        right:30, 
    }
});
export default Vimgscreen; 