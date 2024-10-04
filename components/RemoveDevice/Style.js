import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    containerButton: {
        backgroundColor: '#a8574d',
        borderRadius: 4,
        marginBottom: 8,
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
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        justifyContent: 'center',
        width: '80%', // Largura ajustada
        height: 'auto', // Altura automática
        padding: 20, // Padding adicionado
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 24, // Tamanho da fonte aumentado
        fontWeight: 'bold', // Negrito
        marginBottom: 10,
        textAlign: 'center', // Centralizado
    },
    deviceItem: {
        padding: 15, // Padding aumentado
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    selectedItem: {
        backgroundColor: '#ddd',
    },
    modalButton: {
        backgroundColor: '#a8574d',
        borderRadius: 4,
        padding: 10,
        marginTop: 10,
        alignItems: 'center', // Remover vírgula extra
    },
    modalButtonText: {
        color: '#f5f5f5',
    },
    noDevicesText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
        color: '#555',
    },
});

export default styles;
