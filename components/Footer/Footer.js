import { View, Text } from 'react-native';
import styles from './Style';

export default function Footer() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Criado por Paulo Henrique Azevedo do Nascimento</Text>
        </View>
    )
}