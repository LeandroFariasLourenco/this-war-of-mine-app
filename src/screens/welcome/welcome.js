import React from 'react'

import * as S from './styled';
import characterService from '../../core/services/characterService';
import Video from 'react-native-video';
import { Button, Image, Text } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';

const Welcome = ({ navigation }) => {
  const [currentCharacter, setHasCurrentCharacter] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const currentGame = await characterService.getCurrentGame();
      if (currentGame) {
        setHasCurrentCharacter(currentGame);
        return;
      }

      setHasCurrentCharacter(null);
    })();
  }, []);

  return (
    <S.Wrapper>
      <Video
        source={require('../../assets/videos/gameplay.mp4')}
        muted
        repeat
        resizeMode="cover"
        rate={0.75}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
        }}
      />
      <S.Overlay />
      <S.Welcome>
        <Image
          resizeMode="cover"
          style={{ width: 390, height: 370, opacity: 0.75 }}
          source={require('../../assets/images/logo.png')}
          PlaceholderContent={<ActivityIndicator />}
        />
        {!currentCharacter ? (
          <>
            <Button
              title="Novo jogo"
              titleStyle={{ fontSize: 32, fontFamily: 'theme' }}
              buttonStyle={{ width: 300, backgroundColor: '#ffb400' }}
              onPress={() => {
                navigation.navigate('choose-character');
              }}
            />
          </>
        ) : (
          <>
            <Text style={{
              fontFamily: 'theme',
              fontSize: 24,
              color: 'white',
              textAlign: 'center',
              marginBottom: 30,
              paddingLeft: 30,
            }}>
              Parece que já há um jogo em andamento, deseja continuar ?
            </Text>

            <Button
              title="Recomeçar"
              icon={{ name: 'plus', color: 'white', type: 'font-awesome' }}
              titleStyle={{ fontSize: 32, fontFamily: 'theme' }}
              buttonStyle={{ width: 300, backgroundColor: '#ffb400', marginBottom: 20, backgroundColor: '#f75454' }}
              onPress={() => {
                (async () => {
                  await characterService.removeCurrentGame();
                  navigation.navigate('choose-character');
                })();
              }}
            />

            <Button
              title="Continuar"
              titleStyle={{ fontSize: 32, fontFamily: 'theme' }}
              buttonStyle={{ width: 300, backgroundColor: '#ffb400' }}
              icon={{ name: 'sign-in', type: 'font-awesome', color: 'white' }}
              onPress={() => {
                navigation.navigate('character', {
                  character: currentCharacter,
                });
              }}
              iconRight
            />
          </>
        )}
      </S.Welcome>
    </S.Wrapper>
  )
}

export default Welcome
