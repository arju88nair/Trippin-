import React, { Component } from 'react';
import  Login from './Components/Login';
import { SwitchNavigator } from 'react-navigation';
import HomeScreen from "./Components/Homescreen";
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';

export default SwitchNavigator({
    App: Login,
    Home: HomeScreen
}, {
    initialRouteName: 'App'
});





// export default class App extends Component
// {
//     render()
//     {
//         return(
//             <Login/>
//         );
//     }
// }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});