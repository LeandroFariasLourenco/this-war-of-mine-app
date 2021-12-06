import React from 'react';
import { ActivityIndicator } from 'react-native';
import { View } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';
import characterService from '../../core/services/characterService';
import getRandomInt from '../../core/utils/randomInt';

import * as S from './styled';

const GameOver = ({
  navigation,
}) => {
  const [character, setCharacter] = React.useState();
  const [ending, setEnding] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const storedCharacter = await characterService.getCurrentGame();
      setCharacter(storedCharacter);
      const maximumValue = 4;

      const deathCause = Object.keys(storedCharacter.stats).find((stat) => {
        return storedCharacter.stats[stat] === maximumValue
      });

      setEnding(storedCharacter.endings[deathCause][getRandomInt(0, storedCharacter.endings[deathCause].length)]);
    })()

  }, []);

  console.log(character);
  return (
    <S.GameOverWrapper>
      <S.GameOverBackground source={require('../../assets/images/wallpaper1.jpg')} />
      <S.Overlay />
      <View style={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Image
          resizeMode="contain"
          style={{
            width: 150,
            height: 200,
            opacity: 0.40,
          }}
          PlaceholderContent={<ActivityIndicator />}
          source={character?.thumb}
        />
        <Text style={{
          color: '#ffb400',
          fontFamily: 'theme',
          fontSize: 24,
          padding: 20,
        }}>
          encontrou seu fim...
        </Text>
        <View
          style={{
            padding: 20,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <Text style={{
            color: '#ffb400',
            fontFamily: 'theme',
            fontSize: 24,
          }}>
            {ending}
          </Text>
        </View>
        <Button
          buttonStyle={{
            backgroundColor: 'black',
            marginTop: 20,
          }}
          title={`E essa foi sua história`}
          onPress={() => {
            characterService.removeCurrentGame();
            navigation.navigate('welcome');
          }}
        />
      </View>
    </S.GameOverWrapper>
  );
};

export default GameOver;
