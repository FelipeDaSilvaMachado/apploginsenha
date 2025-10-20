import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './componentes/Login';
import Home from './componentes/Home';
import Perfil from './componentes/Perfil';
import SplashScreen from './componentes/SplashScreen';
import Cadastro from './componentes/Cadastro';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastre-se' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Diário de Obras', headerLeft: () => null }} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ title: 'Perfil' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}