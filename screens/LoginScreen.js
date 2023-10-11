// LoginScreen.js
import React, { useState } from 'react';
import { Appearance, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authActions';
import { TextInput, Button, Card, Divider, HelperText  } from 'react-native-paper'
// import View from './components/View';
const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let colorScheme = Appearance.getColorScheme();
    const handleSignIn = () => {
        // You can add authentication logic here
        // For now, let's assume a successful login
        const user = {
            email: email,
            // You can add more user data here if needed
        };

        // Dispatch the login action to store user data
        dispatch(login(user));

        // Navigate to the MainScreen upon successful login
        navigation.navigate('Main');
    };

    const hasErrors = () => {
        // return false;
        return !email.length != 0 && !email.includes('@');
    };
    colorScheme = 'dark';
    // console.log(colorScheme)
    let backgroundColorMain = colorScheme == 'dark' ? '#182825' : '#F4FBFA';

    return (
        <View style={{ justifyContent: 'center', flex: 1, padding: 30,}}>
            <Card mode='contained'>
                <Card.Content>
                    <View style={{ marginBottom: 10 }}>
                        <TextInput
                            placeholder="Email"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            // mode='outlined'
                            right={<TextInput.Icon icon={'email'} />}
                        />
                        <HelperText type='error' visible={hasErrors()} padding='none'>
                            Email address is invalid!
                        </HelperText>
                    </View>
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                        style={{ marginBottom: 10 }}
                        right={<TextInput.Icon icon={'lock'} />}
                    // mode='outlined'
                    />
                    <Button onPress={handleSignIn} mode='contained' >
                        Sign In
                    </Button>
                    <View style={{ justifyContent: 'flex-start', paddingTop: 15 }}>
                        <Divider />
                        <Button mode='text' onPress={() => navigation.navigate('Registration')}>
                            Register Now!
                        </Button>
                        <Button mode='text'>
                            Forgot your password?
                        </Button>
                    </View>
                </Card.Content>
            </Card>
        </View>
    );
};

export default LoginScreen;
