// components/AddDevice/Style.js

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: 'center',
        marginTop: 48,
        marginBottom: 16,
    },
    containerButton: {
        backgroundColor: '#2d8555',
        borderRadius: 4,
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#f5f5f5',
        fontFamily: 'TitilliumWeb-SemiBold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 24,
        fontFamily: 'TitilliumWeb-Bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        marginBottom: 10,
    },
    modalButton: {
        backgroundColor: '#2d8555',
        borderRadius: 4,
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
});

export default styles;
