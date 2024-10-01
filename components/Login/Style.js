import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        padding: 20,
    },
    title:{
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'TitilliumWeb-Bold',
        marginBottom: 32,
    },
    text:{
        fontFamily: 'TitilliumWeb-Regular',
    },
    input:{
        width: 248,
        height: 40,
        fontFamily: 'TitilliumWeb-Regular',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 20,
        marginTop: 10,
        paddingHorizontal: 10,
    },
    button:{
        borderRadius: 4,
        marginTop: 10,
        flex: 0,
        alignSelf: 'center',
        width: 160,
        backgroundColor: 'blue',
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontFamily: 'TitilliumWeb-SemiBold'
    },
    createAccount: {
        textAlign: 'center',
        fontFamily: 'TitilliumWeb-Regular',
        marginTop: 32,
        textDecorationLine: 'underline',
        color: '#00f',
    }
});

export default styles;