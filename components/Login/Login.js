// IMPORTA AS BIBLIOTECAS E COMPONENTES NECESSÁRIOS PARA O APP
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import styles from "./Style";

// FUNÇÃO DE LOGIN
export default function LoginPage() {
    const [username, setUsername] = useState(''); // Define o Usuário como Vazio
    const [password, setPassword] = useState(''); // Define a senha como vazio
    const navigation = useNavigation(); // Chama o menu de navegação

    // FUNÇÃO PARA VALIDAR O LOGIN
    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, username, password);
            Alert.alert("Login Realizado com Sucesso!", "Bem vindo de volta!");
            navigation.replace('Initial');
        } catch (error) {
            Alert.alert("Ocorreu um erro", error.message);
        }
    };

    // RENDERIZA A PÁGINA
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.text}>Digite seu Email:</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={username}
                onChangeText={setUsername}
                accessibilityLabel="Email"
            />
            <Text style={styles.text}>Digite sua Senha:</Text>
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                accessibilityLabel="Senha"
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
                <Text style={styles.createAccount}>Não tem uma conta?</Text>
            </TouchableOpacity>
        </View>
    );
}