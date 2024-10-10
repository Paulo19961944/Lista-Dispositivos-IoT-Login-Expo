// IMPORTA A BIBLIOTECA E OS COMPONENTES NECESSÁRIOS PARA O APP
import React, { useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import styles from "./Style";

// FUNÇÃO PARA O MODAL
export default function AddDeviceModal({ visible, onClose }) {
    const [deviceName, setDeviceName] = useState(''); // Define o Nome do Dispositivo como Vazio
    const [location, setLocation] = useState(''); // Define o Local do Dispositivo como Vazio

    // FUNÇÃO PARA ADICIONAR O DISPOSITIVOS
    const handleAddDevice = async () => {
        // SE TIVER O NOME A LOCALIZAÇÃO
        if (deviceName && location) {
            // CRIA UMA COLEÇÃO DE DISPOSITIVOS COMO O NOME E O LOCAL
            await addDoc(collection(db, 'Dispositivos'), {
                device: deviceName,
                local: location,
            });
            setDeviceName(''); // Reseta o Campo
            setLocation(''); // Reseta o Campo
            onClose(); // Fecha o Modal
        }
    };

    // RENDERIZA A PÁGINA
    return (
        <Modal transparent={true} animationType="slide" visible={visible}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Adicionar Dispositivo</Text>
                    <TextInput
                        placeholder="Nome do Dispositivo"
                        value={deviceName}
                        onChangeText={setDeviceName}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Localização"
                        value={location}
                        onChangeText={setLocation}
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.modalButton} onPress={handleAddDevice}>
                        <Text style={styles.buttonText}>Adicionar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalButton} onPress={onClose}>
                        <Text style={styles.buttonText}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
