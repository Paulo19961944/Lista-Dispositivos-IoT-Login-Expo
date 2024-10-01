import React from "react";
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from "./Style";
import Footer from "../Footer/Footer";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

export default function InitialPageTemplate(){
    const navigation = useNavigation();

    const handleLogout = async () => {
        try{
          await signOut(auth);
          navigation.replace('Login');
        } catch(error){
          Alert.alert("Ocorreu um erro", error.message);
        }
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Seja Bem Vindo</Text>
            <Text style={styles.text}>Você efetuou o primeiro login. Essa é a primeira base de toda a aplicação.</Text>
            <TouchableOpacity onPress={handleLogout}>
                <Text style={styles.logout}>Logout</Text>
            </TouchableOpacity>
            <Footer />
        </View>
    )
}