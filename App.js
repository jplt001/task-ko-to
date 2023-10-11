// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import MainScreen from './screens/MainScreen';
import { Appearance } from 'react-native';
import store from './redux/store';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

import { DarkTheme, LightTheme } from './configs/Theme';

const App = () => {

  let colorScheme = Appearance.getColorScheme();
  // colorScheme= 'dark';
  const theme = colorScheme == 'dark' ? DarkTheme : LightTheme;
  
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Main" component={MainScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
