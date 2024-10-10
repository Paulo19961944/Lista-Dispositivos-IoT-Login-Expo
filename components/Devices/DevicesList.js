// IMPORTA AS BIBLIOTECAS E OS COMPONENTES NECESSÁRIOS PARA O APP
import React from 'react';
import { View, Text, FlatList } from "react-native";
import styles from "./Style";
import { useDevices } from '../../contexts/DeviceContext';
import AddNewDevice from "../AddDevice/NewDevice";
import RemoveDeviceManager from "../RemoveDevice/DeleteDevice";
import Footer from "../Footer/Footer";

// FUNÇÃO DEVICES LIST
export default function DevicesList() {
    const { devices } = useDevices(); // Carrega os dispositivos

    // RENDERIZA A PÁGINA
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Dispositivos</Text>
            <Text style={styles.devicesConnected}>Dispositivos Conectados: {devices.length}</Text>

            <FlatList
                data={devices}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item.device} - {item.local}</Text>
                    </View>
                )}
                style={styles.list}
                contentContainerStyle={{ paddingBottom: 100 }}
            />

            <View style={styles.buttonContainer}>
                <AddNewDevice />
                <RemoveDeviceManager />
            </View>

            <Footer />
        </View>
    );
}
