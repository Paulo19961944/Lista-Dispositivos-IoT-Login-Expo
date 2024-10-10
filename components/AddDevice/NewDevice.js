// IMPORTA OS COMPONENTES E AS BIBLIOTECAS NECESSÁRIAS PARA O APP
import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import AddDeviceModal from "./AddDeviceModal";
import styles from "./Style";

// FUNÇÃO PARA ADICIONAR DISPOSITIVOS
export default function AddNewDevice() {
    const [modalVisible, setModalVisible] = useState(false); // Define o Modal com False

    // RENDERIZA A PÁGINA
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>(+) Adicionar Dispositivo</Text>
            </TouchableOpacity>
            <AddDeviceModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
            />
        </View>
    );
}
