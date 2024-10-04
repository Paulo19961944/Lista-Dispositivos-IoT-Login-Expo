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
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo escurecida
    },
    modalContent: {
        width: '80%', // Largura do conteúdo do modal
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        alignItems: 'center', // Centraliza o conteúdo dentro do modal
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        marginBottom: 10,
        padding: 10,
        width: '100%', // Faz o input ocupar toda a largura do modal
    },
    modalButton: {
        backgroundColor: '#2d8555',
        borderRadius: 4,
        padding: 10,
        marginTop: 10,
        alignItems: 'center',
        width: '100%', // Faz o botão ocupar toda a largura do modal
    },
    modalButtonText: {
        color: '#f5f5f5',
    },
});

export default styles;
