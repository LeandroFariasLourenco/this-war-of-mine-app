import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Character from './screens/character/character';
import ChooseCharacter from './screens/choose-character/choose-character';
import GameOver from './screens/game-over/game-over';
import Welcome from './screens/welcome/welcome';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="welcome" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="welcome" component={Welcome} />
            <Stack.Screen name="choose-character" component={ChooseCharacter} />
            <Stack.Screen name="character" component={Character} />
            <Stack.Screen name="game-over" component={GameOver} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
