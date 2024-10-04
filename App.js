import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import Routes from './components/Routes/Routes';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'TitilliumWeb-Regular': require('./assets/Fonts/TitilliumWeb-Regular.ttf'),
        'TitilliumWeb-SemiBold': require('./assets/Fonts/TitilliumWeb-SemiBold.ttf'),
        'TitilliumWeb-Bold': require('./assets/Fonts/TitilliumWeb-Bold.ttf'),
      });
      setFontLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return (
      <ActivityIndicator size='large' color="#00f" />
    );
  }

  return (
    <Routes />
  );
}
