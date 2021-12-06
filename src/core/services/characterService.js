import AsyncStorage from '@react-native-async-storage/async-storage';

const characterService = {
  getCurrentGame: async () => {
    const game = await AsyncStorage.getItem('currentGame');
    if (game) {
      return JSON.parse(game);
    }
    return null;
  },
  setCurrentGame: async (character) => {
    await AsyncStorage.setItem('currentGame', JSON.stringify(character));
  },
  removeCurrentGame: async () => {
    await AsyncStorage.removeItem('currentGame');
  }
};

export default characterService;
