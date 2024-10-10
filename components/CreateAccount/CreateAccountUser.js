// IMPORTA AS BIBLIOTECAS E OS COMPONENTES NECESSÁRIOS PARA O APP
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';
import styles from "./Style";

// FUNÇAO DE CRIAR CONTA
export default function CreateAccountPage() {
    const [username, setUsername] = useState(''); // Define o Usuário como Vazio
    const [password, setPassword] = useState(''); // Define a Senha como Vazio
    const navigation = useNavigation(); // Define a navegação

    // FUNÇÃO PARA CRIAR CONTA
    const createAccontFromUser = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, username, password); // Cria a conta com Email e Senha
            const user = userCredential.user; // Captura os dados do usuário

            // DEFINE UM DOCUMENTO COM USUÁRIOS
            await setDoc(doc(db, 'Usuários', user.uid), {
                user: username
            });

            Alert.alert("Cadastro realizado com sucesso", "Você já pode fazer login")
            navigation.navigate('Login');
        } catch (error) {
            Alert.alert('Ocorreu um erro', error.message);
        }
    };

    // RENDERIZA A PÁGINA
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Criar Conta</Text>
            <Text style={styles.text}>Digite seu email:</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={username}
                onChangeText={setUsername}
                accessibilityLabel="Email"
            />
            <Text style={styles.text}>Digite sua senha</Text>
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                accessibilityLabel="Senha"
            />
            <TouchableOpacity style={styles.button} onPress={createAccontFromUser}>
                <Text style={styles.buttonText}>Criar Conta</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.login}>Faça seu Login</Text>
            </TouchableOpacity>
        </View>
    );
}