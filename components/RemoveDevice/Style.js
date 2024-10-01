import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        marginTop: 20,
    },
    containerButton:{
        backgroundColor: '#a8574d',
        borderRadius: 4,
        marginBottom: 8,
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color: '#f5f5f5',
        fontFamily: 'TitilliumWeb-Regular',
    },
    modalContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
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
    deviceItem:{
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    selectedItem:{
        backgroundColor: '#ddd',
    },
    modalButton:{
        backgroundColor: '#a8574d',
        borderRadius: 4,
        padding: 10,
        marginTop: 10,
        alignItems: 'center,'
    },
    modalButtonText:{
        color: '#f5f5f5',
    },
})

export default styles;