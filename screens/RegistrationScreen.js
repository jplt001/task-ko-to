// RegistrationScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

const RegistrationScreen = ({ navigation }) => {
    return (
        <View style={{ justifyContent: 'center', flex: 1}}>
            <Text>Registration Screen</Text>
            {/* Add your registration form and buttons here */}
            <Button onPress={() => navigation.navigate('Main')}>
                Go to Main Screen
            </Button>
        </View>
    );
};

export default RegistrationScreen;
