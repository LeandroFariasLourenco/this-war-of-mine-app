import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Button, Dialog, Image, Text } from 'react-native-elements';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Footer from './components/footer/footer';

import * as S from './styled';

const Character = ({
  navigation,
  route
}) => {
  const character = route.params.character;
  const [description, setDescription] = React.useState(character.description);

  return (
    <GestureHandlerRootView>
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
          }} title={`Eu sou ${character.name.toLowerCase()} e essa é minha história`} />
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