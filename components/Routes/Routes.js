import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DeviceProvider } from '../../contexts/DeviceContext';

// IMPORTANDO COMPONENTES
import LoginPage from '../Login/Login';
import CreateAccountPage from '../CreateAccount/CreateAccountUser';
import InitialPageTemplate from '../InitialPage/InitialPage';
import DevicesList from '../Devices/DevicesList';
import AddNewDevice from '../AddDevice/NewDevice';
import RemoveDeviceManager from '../RemoveDevice/DeleteDevice';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <DeviceProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={LoginPage} />
                    <Stack.Screen name="CreateAccount" component={CreateAccountPage} />
                    <Stack.Screen name="Initial" component={InitialPageTemplate} />
                    <Stack.Screen name="ListDevices" component={DevicesList} />
                    <Stack.Screen name="AddDevice" component={AddNewDevice} />
                    <Stack.Screen name="RemoveDevice" component={RemoveDeviceManager} />
                </Stack.Navigator>
            </NavigationContainer>
        </DeviceProvider>
    );
}
