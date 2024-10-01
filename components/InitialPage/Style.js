import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        marginTop: 192,
    },
    title:{
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'TitilliumWeb-Bold',
        marginBottom: 32,
    },
    text:{
        fontFamily: 'TitilliumWeb-Regular',
        paddingHorizontal: 40,
    },
    logout:{
        textAlign: 'center',
        fontFamily: 'TitilliumWeb-Regular',
        marginTop: 32,
        textDecorationLine: 'underline',
        color: '#00f',
    }
});

export default styles;