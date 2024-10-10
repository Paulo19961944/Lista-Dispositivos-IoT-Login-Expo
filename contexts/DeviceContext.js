// IMPORTA OS COMPONENTES E AS BIBLIOTECAS NECESSÁRIAS PARA O APP
import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore';

const DeviceContext = createContext(); // Cria um Contexto

// CRIA UM PROVEDOR
export const DeviceProvider = ({ children }) => {
    const [devices, setDevices] = useState([]); // Define os dispositivos com uma lista vazia

    useEffect(() => {
        const devicesCollection = collection(db, 'Dispositivos'); // Cria uma coleção chamada dispositivos
        
        // CARREGA OS DISPOSITIVOS
        const unsubscribe = onSnapshot(devicesCollection, 
            (snapshot) => {
                const devicesData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setDevices(devicesData);
                console.log("Dispositivos carregados:", devicesData);
            },
            (error) => {
                console.error("Erro ao buscar dispositivos: ", error);
            }
        );

        return () => unsubscribe(); // Limpa o listener quando o componente é desmontado
    }, []);

    // FUNÇÃO PARA REMOVER DISPOSITIVOS
    const removeDevice = async (id) => {
        try {
            const deviceDoc = doc(db, 'Dispositivos', id);
            await deleteDoc(deviceDoc);
            console.log(`Dispositivo ${id} removido.`);
        } catch (error) {
            console.error("Erro ao remover dispositivo: ", error);
        }
    };

    return (
        <DeviceContext.Provider value={{ devices, removeDevice }}>
            {children}
        </DeviceContext.Provider>
    );
};

export const useDevices = () => useContext(DeviceContext); // Exporta o contexto
