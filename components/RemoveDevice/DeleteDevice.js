// IMPORTA AS BIBLIOTECAS E COMPONENTES NECESSÁRIOS PARA O APP
import React, { useState } from "react";
import { View, TouchableOpacity, Text } from 'react-native';
import RemoveDeviceModal from "./RemoveDeviceModal";
import styles from "./Style";
import { useDevices } from '../../contexts/DeviceContext';

// FUNÇÃO PARA REMOVER DISPOSITIVOS
export default function RemoveDeviceManager() {
    const [modalVisible, setModalVisible] = useState(false); // Define o Modal como False
    const { devices } = useDevices(); // Carrega os Dispositivos

    // RENDERIZA A PÁGINA
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>(-) Remover Dispositivo</Text>
            </TouchableOpacity>
            <RemoveDeviceModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                devices={devices}
            />
        </View>
    );
}
