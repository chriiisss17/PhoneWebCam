import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    icon:{
    },
    title:{
        fontSize: 24,
    },
})

const LogoScreen = () =>{
    return(
        <View style={styles.container}>
            <MaterialCommunityIcons style={styles.icon} name="webcam" size={140} color={'green'}/>
            <Text style={styles.title}> Phone WebCam</Text>
        </View>
    )
}

export default LogoScreen;