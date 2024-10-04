import React, { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const DeviceContext = createContext();

export const useDevices = () => useContext(DeviceContext);

export const DeviceProvider = ({ children }) => {
    const [devices, setDevices] = useState([]);

    const fetchDevices = async () => {
        const devicesCollection = collection(db, 'Dispositivos');
        const devicesSnapshot = await getDocs(devicesCollection);
        const deviceList = devicesSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        setDevices(deviceList);
        console.log(deviceList); // Adicione esta linha para verificar os dispositivos
    };
    

    useEffect(() => {
        fetchDevices();
    }, []);

    return (
        <DeviceContext.Provider value={{ devices, fetchDevices }}>
            {children}
        </DeviceContext.Provider>
    );
};
