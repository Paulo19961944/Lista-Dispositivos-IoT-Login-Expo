import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { db } from '../../firebaseConfig';
import { deleteDoc, doc } from "firebase/firestore";
import styles from "./Style";

export default function RemoveDeviceModal({ visible, onClose, onDeviceRemoved, devices }) {
    const [selectedDeviceId, setSelectedDeviceId] = useState(null);

    const handleRemoveDevice = async () => {
        if (selectedDeviceId) {
            await deleteDoc(doc(db, 'Dispositivos', selectedDeviceId));
            setSelectedDeviceId(null);
            onDeviceRemoved()
            setTimeout(onClose, 500);
        }
    };

    return (
        <Modal transparent={true} animationType="slide" visible={visible}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Remover Dispositivo</Text>
                    <FlatList
                        data={devices}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={[styles.deviceItem, selectedDeviceId === item.id && styles.selectedItem]}
                                onPress={() => setSelectedDeviceId(item.id)}
                            >
                                <Text>{item.device} - {item.local}</Text>

                            </TouchableOpacity>
                        )}
                    />
                    <TouchableOpacity style={styles.modalButton} onPress={handleRemoveDevice}>
                        <Text style={styles.modalButtonText}>Confrmar Remoção</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalButton} onPress={onClose}>
                        <Text style={styles.modalButtonText}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}