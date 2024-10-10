// IMPORTA AS BIBLIOTECAS E OS COMPONENTES NECESSÁRIOS PARA O APP
import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import Routes from './components/Routes/Routes';

// FUNÇÃO APP
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false); // Define o estado da fonte como false

  // CARREGA AS FONTES
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'TitilliumWeb-Regular': require('./assets/Fonts/TitilliumWeb-Regular.ttf'),
        'TitilliumWeb-SemiBold': require('./assets/Fonts/TitilliumWeb-SemiBold.ttf'),
        'TitilliumWeb-Bold': require('./assets/Fonts/TitilliumWeb-Bold.ttf'),
      });
      setFontLoaded(true); // Define a fonte como true
    }
    loadFonts(); // Carrega a Fonte
  }, []);

  // SE NÃO CARREGAR A FONTE APARECE O LAZY LOADING
  if (!fontLoaded) {
    return <ActivityIndicator size='large' color="#00f" />;
  }

  return <Routes />; // Retorna as Rotas
}
