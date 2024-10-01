import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 48,
    },
    containerButton:{
        backgroundColor: '#2d8555',
        borderRadius: 4,
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color: '#f5f5f5',
        fontFamily: 'TitilliumWeb-SemiBold',
    },
    modalContent:{
        width: 300,
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    modalTitle:{
        fontSize: 20,
        marginBottom: 10,
    },
    input:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        marginBottom: 10,
        padding: 10,
    },
    modalButton:{
        backgroundColor: '#2d8555',
        borderRadius: 4,
        padding: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    modalButtonText:{
        color: '#f5f5f5',
    },
});

export default styles;