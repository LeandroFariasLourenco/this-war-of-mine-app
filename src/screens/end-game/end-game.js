import React from 'react'

import { AppText, AppOverlay } from '../../shared/components';
import characterService from '../../core/services/characterService';

import * as S from './styled';
import { ActivityIndicator, View } from 'react-native';
import { Button, Image } from 'react-native-elements';

const EndGame = ({
  navigation
}) => {
  const [character, setCharacter] = React.useState(null);
  const [ending, setEnding] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const storedCharacter = await characterService.getCurrentGame();
      setCharacter(storedCharacter);

      const possibleEnding = {
        0: () => {
          setEnding(storedCharacter.finalEndings.good);
        },

        1: () => {
          setEnding(storedCharacter.finalEndings.intermediary);
        },
        2: () => {
          setEnding(storedCharacter.finalEndings.intermediary);
        },

        3: () => {
          setEnding(storedCharacter.finalEndings.bad);
        },
      }[storedCharacter.stats.Tristeza];

      possibleEnding();
    })()
  }, []);

  return (
    <S.EndGameWrapper>
      <S.EndGameBackground source={require('../../assets/images/wallpaper1.jpg')} />
      <AppOverlay />
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
        <View
          style={{
            padding: 20,
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: '80%',
            marginTop: 10,
          }}
        >
          <AppText style={{
            color: '#ffb400',
            fontFamily: 'theme',
            fontSize: 24,
          }}>
            {ending}
          </AppText>
        </View>
        <Button
          buttonStyle={{
            backgroundColor: 'black',
            marginTop: 20,
          }}
          title="Essa é minha história"
          onPress={() => {
            characterService.removeCurrentGame();
            navigation.navigate('welcome');
          }}
        />
      </View>
    </S.EndGameWrapper>
  )
}

export default EndGame;
