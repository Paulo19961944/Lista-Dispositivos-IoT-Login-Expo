import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './components/Login/Login';
import CreateAccountPage from './components/CreateAccount/CreateAccountUser';
import InitialPageTemplate from './components/InitialPage/InitialPage';
import DevicesList from './components/Devices/DevicesList';
import AddNewDevice from './components/AddDevice/NewDevice';
import RemoveDeviceManager from './components/RemoveDevice/DeleteDevice';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'TitilliumWeb-Regular': require('./assets/Fonts/TitilliumWeb-Regular.ttf'),
        'TitilliumWeb-SemiBold': require('./assets/Fonts/TitilliumWeb-SemiBold.ttf'),
        'TitilliumWeb-Bold': require('./assets/Fonts/TitilliumWeb-Bold.ttf'),
      });
      setFontLoaded(true);
    }
    loadFonts();

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const fetchDevices = async () => {
    const devicesCollection = collection(db, 'Dispositivos');
    const devicesSnapshot = await getDocs(devicesCollection);
    const deviceList = devicesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setDevices(deviceList);
  }

  useEffect(() =>{
    fetchDevices();
  }, []);
  
  if (!fontLoaded) {
    return (
      <ActivityIndicator size='large' color="#00f" />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "Initial" : "Login"}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="CreateAccount" component={CreateAccountPage} />
        <Stack.Screen name="Initial" component={InitialPageTemplate} />
        <Stack.Screen name="ListDevices" component={DevicesList} devices={devices} />
        <Stack.Screen name="AddDevice" component={AddNewDevice} fetchDevices={fetchDevices} />
        <Stack.Screen name="RemoveDevice" component={RemoveDeviceManager} fetchDevices={fetchDevices} devices={devices} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
