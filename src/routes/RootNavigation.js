import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LogoScreen from '../screens/logo/LogoScreen';
import CameraScreen from '../screens/camera/CameraScreen';

const RootNavigation = () => {
    const Stack = createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="CameraScreen">
                <Stack.Screen name="LogoScreen" component={LogoScreen} options={{headerShown: false}}/>
                <Stack.Screen name="CameraScreen" component={CameraScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;