import React, { Component } from 'react';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Show me more of the app" onPress={this._showMoreApp} />
                {/*<Button title="Actually, sign me out :)" onPress={this._signOutAsync} />*/}
            </View>
        );
    }


    _signOutAsync = async () => {
        this.props.navigation.navigate('Auth');
    };
}
