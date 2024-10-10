// components/Devices/Style.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    },
    title: {
        fontSize: 24,
        fontFamily: 'TitilliumWeb-Bold',
        marginTop: 120,
        marginBottom: 48,
    },
    devicesConnected: {
        fontSize: 18,
        fontFamily: 'TitilliumWeb-Regular',
        marginBottom: 24,
    },
    list: {
        height: 200,
        width: '100%',
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontFamily: 'TitilliumWeb-Regular',
    },
});

export default styles;
