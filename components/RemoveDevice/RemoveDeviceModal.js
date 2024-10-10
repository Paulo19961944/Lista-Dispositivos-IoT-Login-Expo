// IMPORTA AS BIBLIOTECAS E COMPONENTES NECESSÁRIOS
import React from "react";
import { Modal, View, Text, TouchableOpacity, FlatList } from "react-native";
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import styles from "./Style";

// FUNÇÃO PARA CRIAR O MODAL
export default function RemoveDeviceModal({ visible, onClose, devices }) {
    // FUNÇÃO PARA REMOVER OS DISPOSITIVOS
    const handleRemoveDevice = async (deviceId) => {
        try {
            await deleteDoc(doc(db, 'Dispositivos', deviceId));
            console.log(`Dispositivo ${deviceId} removido.`);
            onClose(); // Fecha o modal após a remoção
        } catch (error) {
            console.error("Erro ao remover dispositivo:", error);
        }
    };

    // RENDERIZA O MODAL
    return (
        <Modal transparent={true} animationType="slide" visible={visible}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Remover Dispositivo</Text>
                    {devices.length > 0 ? (
                        <FlatList
                            data={devices}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity 
                                    style={styles.deviceItem} 
                                    onPress={() => handleRemoveDevice(item.id)}
                                >
                                    <Text>{item.device} - {item.local}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    ) : (
                        <Text style={styles.noDevicesText}>Nenhum dispositivo disponível para remover.</Text>
                    )}
                    <TouchableOpacity style={styles.modalButton} onPress={onClose}>
                        <Text style={styles.modalButtonText}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
