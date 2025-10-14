import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './componentes/SplashScreen';
import Home from './componentes/Home';
import Login from './componentes/Login';
import Perfil from './componentes/Perfil';
import Registro from './componentes/Registro';

const Stack = createStackNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Seja bem vindo ao\nDiário de Obras', headerLeft: () => null }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ title: 'Perfil' }} />
        <Stack.Screen name="Registro" component={Registro} /> {/* options={{ title: 'Cadastre-se' }} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}