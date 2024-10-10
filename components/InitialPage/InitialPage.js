// IMPORTA AS BIBLIOTECAS E COMPONENTES NECESSÁRIOS PARA O APP
import React from "react";
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from "./Style";
import Footer from "../Footer/Footer";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

// FUNÇÃO PARA A PÁGINA INICIAL
export default function InitialPageTemplate() {
    const navigation = useNavigation(); // Define a navegação das páginas

    // FUNÇÃO PARA MANDAR NA PÁGINA DE LOGIN
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigation.replace('Login');
        } catch (error) {
            Alert.alert("Ocorreu um erro", error.message);
        }
    };

    // RENDERIZA A PÁGINA
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Seja Bem Vindo</Text>
            <Text style={styles.text}>Olá, para gerenciar os seus dispositivos clique no botão abaixo.</Text>
            <TouchableOpacity style={styles.buttonManagerDevices} onPress={() => {navigation.navigate('ListDevices')}}>
                <Text style={styles.buttonText}>(+) Gerenciar Dispositivos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
                <Text style={styles.logout}>Logout</Text>
            </TouchableOpacity>
            <Footer />
        </View>
    )
}