// IMPORTA AS BIBLIOTECAS
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DeviceProvider } from '../../contexts/DeviceContext';

// IMPORTANDO COMPONENTES
import LoginPage from '../Login/Login';
import CreateAccountPage from '../CreateAccount/CreateAccountUser';
import InitialPageTemplate from '../InitialPage/InitialPage';
import DevicesList from '../Devices/DevicesList';

const Stack = createNativeStackNavigator(); // Cria um Navegador

// FUNÇÃO PARA CRIAR ROTAS
export default function Routes() {
    return (
        <DeviceProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={LoginPage} />
                    <Stack.Screen name="CreateAccount" component={CreateAccountPage} />
                    <Stack.Screen name="Initial" component={InitialPageTemplate} />
                    <Stack.Screen name="ListDevices" component={DevicesList} />
                </Stack.Navigator>
            </NavigationContainer>
        </DeviceProvider>
    );
}
