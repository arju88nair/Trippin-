import React, { Component } from 'react';
import  Login from './Components/Login';
import { SwitchNavigator } from 'react-navigation';
import HomeScreen from "./Components/Homescreen";

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