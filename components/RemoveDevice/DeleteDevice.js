import React, { useState } from "react";
import { View, TouchableOpacity, Text } from 'react-native';
import RemoveDeviceModal from "./RemoveDeviceModal";
import styles from "./Style";
import { useDevices } from '../../contexts/DeviceContext'; // Importando o contexto

export default function RemoveDeviceManager() {
    const [modalVisible, setModalVisible] = useState(false);
    const { devices, fetchDevices } = useDevices(); // Obtendo devices e fetchDevices do contexto

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>(-) Remover Dispositivo</Text>
            </TouchableOpacity>
            <RemoveDeviceModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onDeviceRemoved={() => {
                    fetchDevices(); // Chama fetchDevices do contexto
                    setModalVisible(false);
                }}
                devices={devices}
            />
        </View>
    );
}
