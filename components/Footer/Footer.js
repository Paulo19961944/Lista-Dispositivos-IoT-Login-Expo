// IMPORTA OS COMPONENTES NECESSÁRIOS
import { View, Text } from 'react-native';
import styles from './Style';

// FUNÇÃO FOOTER
export default function Footer() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Criado por Paulo Henrique Azevedo do Nascimento</Text>
        </View>
    );
}
