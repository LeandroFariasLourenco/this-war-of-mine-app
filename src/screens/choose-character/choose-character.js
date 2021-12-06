import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';
import Video from 'react-native-video';
import Carousel from 'react-native-snap-carousel';

import Characters from '../../core/resources/characters';

import * as S from './styled';
import characterService from '../../core/services/characterService';

const ChooseCharacter = ({
  navigation,
}) => {
  return (
    <S.Wrapper>
      <Video
        source={require('../../assets/videos/trailer.mp4')}
        muted
        repeat
        resizeMode="cover"
        rate={0.70}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
        }} />
      <S.Overlay />
      <Text h3 style={{
        textAlign: 'center',
        color: '#ffb400',
        paddingVertical: 20,
        width: 175,
      }}>Escolha seu personagem</Text>
      <S.Container>
        <Carousel
          data={Characters}
          loop
          sliderWidth={375}
          removeClippedSubviews={false}
          itemWidth={300}
          renderItem={({ item }) => (
            <View containerStyle={{ padding: 0 }}>
              <Image
                resizeMode="contain"
                style={{ width: '100%', height: 370, opacity: 0.75 }}
                PlaceholderContent={<ActivityIndicator />}
                source={item.thumb}
              />
              <Button
                title="Escolher"
                containerStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
                buttonStyle={{ backgroundColor: 'black', marginTop: 30, width: 150 }}
                onPress={() => {
                  (async () => {
                    characterService.setCurrentGame(item);
                    navigation.navigate('character', {
                      character: item,
                    })
                  })()
                }}
                iconRight
              />
            </View>
          )}
        />
      </S.Container >
    </S.Wrapper>
  );
};

export default ChooseCharacter;
