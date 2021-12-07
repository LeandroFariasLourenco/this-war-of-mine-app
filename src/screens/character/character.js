import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Button, Dialog, Image, Text } from 'react-native-elements';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AppText } from '../../shared/components';
import { THEME } from '../../styles/theme';
import Footer from './components/footer/footer';
import Memories from './components/memories/memories';

import * as S from './styled';

const Character = ({
  navigation,
  route
}) => {
  const character = route.params.character;
  const [confirmEndgame, setConfirmEndgame] = React.useState(false);
  const [description, setDescription] = React.useState(character.description);

  return (
    <GestureHandlerRootView>
      <Dialog
        overlayStyle={{ backgroundColor: 'black' }}
        isVisible={confirmEndgame}
      >
        <AppText text="Aviso" size={28} />
        <AppText text="Você tem certeza que deseja finalizar o jogo?" size={18} color="white" />
        <AppText text="Apenas selecione se conseguiu sobreviver ao jogo completo." size={18} color="white" />

        <Dialog.Actions>
          <Button
            title="Não"
            titleStyle={{ fontFamily: THEME.fontName, fontSize: 24 }}
            onPress={() => setConfirmEndgame(false)}
            buttonStyle={{
              backgroundColor: THEME.colors.fonts.primary,
              paddingHorizontal: 20
            }}
          />
          <Button
            title="Sim"
            titleStyle={{ fontFamily: THEME.fontName, fontSize: 24 }}
            containerStyle={{
              marginRight: 20,
            }}
            onPress={() => {
              navigation.navigate('end-game');
            }}
            buttonStyle={{
              backgroundColor: THEME.colors.buttons.danger,
              paddingHorizontal: 20
            }}
          />
        </Dialog.Actions>
      </Dialog>

      <Dialog
        isVisible={!!description}
        overlayStyle={{
          padding: 0,
          margin: 0,
          borderWidth: 2,
          borderColor: 'black',
          borderRadius: 10,
          backgroundColor: 'black'
        }}
      >
        <S.GenericBackground
          source={require('../../assets/images/fundo-preto.png')}
          imageStyle={{ height: '100%', width: '100%' }}
        />
        <View style={{ padding: 20 }}>
          <Text style={{
            fontFamily: 'theme',
            color: '#ffb400',
            fontSize: 38,
            textAlign: 'center',
            textShadowColor: 'black',
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 50
          }}>
            {character.name.toUpperCase()}
          </Text>
          <Text
            style={{
              fontFamily: 'theme',
              color: 'white',
              fontSize: 24,
              textShadowColor: 'black',
              textShadowOffset: { width: 0, height: 0 },
              textShadowRadius: 50
            }}
          >
            {description}
          </Text>
        </View>

        <Button
          buttonStyle={{
            paddingHorizontal: 20,
            backgroundColor: 'black',
          }}
          onPress={() => {
            setDescription(null);
          }}
          titleStyle={{
            color: 'white',
            fontFamily: 'theme',
            fontSize: 18,
          }}
          title={`Eu sou ${character.name.toLowerCase()} e essa guerra é minha`} />
      </Dialog>
      <S.Background
        height="60%"
        source={require('../../assets/images/wallpaper1.jpg')}
        resizeMode="cover"
        style={{ position: 'absolute', top: 0, left: 0, zIndex: -1, width: '100%', height: '100%' }}
      />
      <S.Overlay />
      <View style={{ height: '100%' }}>
        <S.Character>
          <Image
            PlaceholderContent={<ActivityIndicator />}
            source={character.portrait}
            style={{ width: 330, height: 450 }}
          />

          <S.CharacterFooter>
            <Memories />
            <Button
              containerStyle={{
                opacity: 0.5,
              }}
              titleStyle={{
                fontFamily: THEME.fontName,
                fontSize: 22,
              }}
              buttonStyle={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                backgroundColor: THEME.colors.buttons.danger
              }}
              onPress={() => setConfirmEndgame(true)}
              title="Finalizar"
            />
          </S.CharacterFooter>
        </S.Character>
        <Footer
          character={character}
          navigation={navigation}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default Character;