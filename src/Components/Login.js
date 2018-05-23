/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import { fbLoginPermissions } from '../../constants/index';
import firebase from '../../config/firebase';
import Auth from '../../config/auth';
import Homescreen from '../../Components/Homescreen'
import { SwitchNavigator } from 'react-navigation';

export default class Login extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={this._handleFbLogin}
                    title="Sign in with facebook"
                    color="#3c50e8"
                />
            </View>
        );
    }
    _handleFbLogin = async () => {
        // Auth.Facebook.login(fbLoginPermissions)
        //   .then((token) => {
        //     firebase.auth()
        //       .signInWithCredential(firebase.auth.FacebookAuthProvider.credential(token))
        //       this.props.navigation.navigate('Home');
        //
        //   })
        //   .catch((err) => this.onError && this.onError(err))
        this.props.navigation.navigate('Home');
    };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
