// components/AddDevice/NewDevice.js
import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import AddDeviceModal from "./AddDeviceModal";
import styles from "./Style";
import { useDevices } from '../../contexts/DeviceContext'; // Importando o contexto

export default function AddNewDevice() {
    const [modalVisible, setModalVisible] = useState(false);
    const { fetchDevices } = useDevices(); // Acessando fetchDevices do contexto

    const handleDeviceAdded = () => {
        fetchDevices(); // Atualiza a lista de dispositivos
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>(+) Adicionar Dispositivo</Text>
            </TouchableOpacity>
            <AddDeviceModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onDeviceAdded={handleDeviceAdded}
            />
        </View>
    );
}
