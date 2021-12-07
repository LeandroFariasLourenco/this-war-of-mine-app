import React from 'react';
import { ImageBackground, View } from 'react-native';
import { BottomSheet, Button, Dialog, Icon, ListItem, Text } from 'react-native-elements';
import { PanGestureHandler, TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import HungerStatImage from '../../../../assets/images/thumbs/hunger-stat.png';
import WoundStatImage from '../../../../assets/images/thumbs/wound-stat.png';
import MiseryStatImage from '../../../../assets/images/thumbs/misery-stat.png';
import FatigueStatImage from '../../../../assets/images/thumbs/fatigue-stat.png';
import DiseaseStatImage from '../../../../assets/images/thumbs/disease-stat.png';

import NotCurrentImage from '../../../../assets/images/not-current.png';

import RedBackground from '../../../../assets/images/colors/vermelho-fundo.png';
import BlueBackground from '../../../../assets/images/colors/azul-fundo.png';
import YellowBackground from '../../../../assets/images/colors/amarelo-fundo.png';
import GreenBackground from '../../../../assets/images/colors/verde-fundo.png';

import { ScreenHeight } from 'react-native-elements/dist/helpers';
import characterService from '../../../../core/services/characterService';
import defaultCharacters from '../../../../core/resources/defaultCharacters';
import characterStatsThoughts from '../../../../core/resources/toughts';

import getRandomInt from '../../../../core/utils/randomInt';
import { THEME } from '../../../../styles/theme';

import * as S from './styled';

const Footer = ({
  character,
  navigation
}) => {
  const [activeColor, setActiveColor] = React.useState({});
  const [changingColor, setChangingColor] = React.useState(false);
  const [choosingCharacterToReplace, setChoosingCharacterToReplace] = React.useState(false);
  const [characterThoughts, setCharacterThoughts] = React.useState(null);
  const colors = [
    { hex: '#32a852', label: 'Verde' },
    { hex: '#055cad', label: 'Azul' },
    { hex: '#e8c33f', label: 'Amarelo' },
    { hex: '#f74d4d', label: 'Vermelho' },
  ];
  const [stats, setStats] = React.useState([
    { label: 'Fome', value: 2, background: require('../../../../assets/images/stats/hunger.png') },
    { label: 'Tristeza', value: 0, background: require('../../../../assets/images/stats/misery.png') },
    { label: 'Doente', value: 0, background: require('../../../../assets/images/stats/disease.png') },
    { label: 'Ferimento', value: 0, background: require('../../../../assets/images/stats/wounds.png') },
    { label: 'Cansaço', value: 0, background: require('../../../../assets/images/stats/fatigue.png') },
  ]);
  const offsetY = useSharedValue(0);
  const minimumOffset = 150;
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.posY = offsetY.value;
    },
    onActive: (event, ctx) => {
      offsetY.value = withSpring(ctx.posY + event.translationY);
    },
    onEnd: (event) => {
      if (event.absoluteY > ScreenHeight - minimumOffset) {
        offsetY.value = withSpring(0);
        return;
      }

      if (event.absoluteY < 100) {
        offsetY.value = withSpring(-(ScreenHeight - 300));
      }
    }
  });

  const notifyCharacterThoughts = (label, value, previousValue) => {
    const maximumValue = 4;

    if (previousValue === maximumValue || previousValue === value) {
      return;
    }

    if (value < maximumValue) {
      let thoughtType = previousValue < value ? 'increase' : 'decrease';
      const statAcessor = characterStatsThoughts[label][value][0][thoughtType];

      const randomIndex = getRandomInt(0, statAcessor.length);
      const randomThought = statAcessor[randomIndex]
      setCharacterThoughts(randomThought);
    } else {
      setCharacterThoughts(characterStatsThoughts[label][value][0]);
    }
  }

  const updateStats = () => {
    setStats(stats.map(({ label, value, background }) => ({
      label,
      value: character.stats[label] || value,
      background
    })));
    setActiveColor(character.color);
  }

  React.useEffect(() => {
    updateStats();
  }, []);

  const positionStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: offsetY.value },
      ],
    }
  });

  const storeCharacter = async (newStats, statIndex) => {
    const toStore = {
      ...character,
      stats: {
        ...character.stats,
      }
    }
    newStats.forEach((stat) => {
      toStore.stats[stat.label] = stat.value;
    });
    await characterService.setCurrentGame(toStore);
  }

  const renderLabel = (stat) => {
    const { label, background, value } = stat;
    const newStats = [...stats];
    const statIndex = newStats.findIndex(({ label: l }) => l === label);
    const previousValue = newStats[statIndex].value;
    return (
      <S.StatsWrapper
        key={label}
        source={background} imageStyle={{ borderRadius: 20 }}
      >
        <S.StatLabel style={{
          fontFamily: 'theme',
          textShadowColor: 'black',
          textShadowOffset: { width: 0, height: 0 },
          textShadowRadius: 50
        }}>
          {label}
        </S.StatLabel>
        <S.StatCircleWrapper>
          {new Array(4).fill(null).map((v, i) => (
            <TouchableOpacity
              key={`${i}-touchable`}
              style={{ width: 30, height: 30 }}
              onLongPress={() => {
                newStats[statIndex].value = 0;
                storeCharacter(newStats, statIndex);
                notifyCharacterThoughts(label, 0, previousValue);
                setStats([...newStats]);
              }}
              onPress={() => {
                newStats[statIndex].value = i + 1;
                notifyCharacterThoughts(label, newStats[statIndex].value, previousValue);
                setStats([...newStats]);
                storeCharacter(newStats, statIndex);
              }}
            >
              {i < value
                ? <S.StatCircle key={i} source={{
                  'Fome': HungerStatImage,
                  'Tristeza': MiseryStatImage,
                  'Doente': DiseaseStatImage,
                  'Ferimento': WoundStatImage,
                  'Cansaço': FatigueStatImage,
                }[label]} resizeMode="cover" />
                : <S.StatCircle key={i} source={NotCurrentImage} resizeMode="cover" />}
            </TouchableOpacity>
          ))}
        </S.StatCircleWrapper>
      </S.StatsWrapper>
    );
  }

  return (
    <>
      <Dialog
        isVisible={!!characterThoughts}
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
          source={require('../../../../assets/images/fundo-preto.png')}
          imageStyle={{ height: '100%', width: '100%' }}
        />
        <View style={{ padding: 20 }}>
          {!characterThoughts?.includes('Pegue alguma carta de epílogo desse status.') && <Text style={{
            fontFamily: 'theme',
            color: 'white',
            fontSize: 28,
            textAlign: 'center',
            textShadowColor: 'black',
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 50,
            marginBottom: 20
          }}>Andei pensando e..</Text>}
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
            {characterThoughts?.toLowerCase()}
          </Text>
        </View>

        {characterThoughts === 'Aperte em continuar se o personagem atingiu 4 de status' && (
          <Button
            buttonStyle={{
              backgroundColor: THEME.colors.buttons.danger,
              paddingHorizontal: 20,
            }}
            onPress={() => {
              setCharacterThoughts(null);
            }}
            titleStyle={{
              color: 'white',
              fontFamily: 'theme',
              fontSize: 24,
            }} title="Fechar" />
        )}

        <Button
          buttonStyle={{
            backgroundColor: activeColor.hex,
            paddingHorizontal: 20,
          }}
          onPress={() => {
            if (characterThoughts === 'Aperte em continuar se o personagem atingiu 4 de status') {
              navigation.navigate('game-over');
              return;
            }
            setCharacterThoughts(null);
          }}
          titleStyle={{
            color: 'white',
            fontFamily: 'theme',
            fontSize: 24,
          }} title="Continuar" />
      </Dialog>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[positionStyle, {
          height: '100%',
          position: 'absolute',
          bottom: '-80%',
          left: 0,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: 'black',
          width: '100%',
          paddingTop: 20,
        }]}>
          <ImageBackground
            source={require('../../../../assets/images/black-paper.png')}
            resizeMode="repeat"
            resizeMethod="resize"
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            imageStyle={{
              width: '100%',
              height: '100%',
            }}
          />
          <Text
            style={{
              fontFamily: 'theme',
              color: 'white',
              fontSize: 48,
              textAlign: 'center',
              letterSpacing: 5,
              textShadowColor: activeColor.hex || 'transparent',
              textShadowOffset: { width: -1, height: -1 },
              textShadowRadius: 100
            }}
          >
            {character.name.toUpperCase()}
          </Text>
          <S.CharacterFooterWrapper style={{ marginTop: 0 }}>
            {stats.map((stat, index, arr) => (
              index % 2 === 0 && (
                <S.FooterColumn
                  key={stat.label}
                >
                  {renderLabel(stat)}
                  {arr[index + 1] && renderLabel(arr[index + 1])}
                  {index === stats.length - 1 && (
                    <S.StatsWrapper
                      style={{
                        width: '45%',
                        backgroundColor: activeColor.hex,
                        borderRadius: 20,
                        opacity: 0.8
                      }}
                    >
                      <TouchableOpacity
                        containerStyle={{
                          flex: 1,
                          alignItems: 'center',
                        }}
                        onPress={() => {
                          setChoosingCharacterToReplace(true);
                        }}
                      >
                        <Text style={{
                          fontFamily: 'theme', fontSize: 24,
                          color: 'white'
                        }}>
                          Substituindo:
                        </Text>
                        <Text style={{
                          fontFamily: 'theme', fontSize: 24,
                          color: 'white'
                        }}>
                          {character.replacing || 'Nenhum'}
                        </Text>
                      </TouchableOpacity>
                    </S.StatsWrapper>
                  )}
                </S.FooterColumn>
              )
            ))}
            <TouchableOpacity
              style={{
                marginTop: 20,
                width: '100%',
                height: 75,
                backgroundColor: activeColor.hex ?? 'white',
                justifyContent: 'center',
              }}
              onPress={() => {
                setChangingColor(true);
              }}
            >
              <S.GenericBackground
                source={{
                  'Vermelho': RedBackground,
                  'Verde': GreenBackground,
                  'Azul': BlueBackground,
                  'Amarelo': YellowBackground,
                }[activeColor.label]}
                style={{ width: '100%', height: '100%' }}
              />
              {!activeColor.hex ??
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: 'theme',
                    textAlign: 'center',
                    color: 'black'
                  }}>
                  Selecione uma cor
                </Text>}
            </TouchableOpacity>
          </S.CharacterFooterWrapper>
        </Animated.View>
      </PanGestureHandler>

      <BottomSheet
        isVisible={choosingCharacterToReplace}
      >
        <S.GenericBackground
          source={require('../../../../assets/images/fundo-preto.png')}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
        {defaultCharacters.map(({ name }) => (
          <ListItem
            key={name}
            onPress={() => {
              character.replacing = name;
              characterService.setCurrentGame(character);
              setChoosingCharacterToReplace(false);
            }}
            containerStyle={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: 'white', borderRadius: 10 }}
          >
            <ListItem.Content>
              <ListItem.Title style={{ fontFamily: 'theme', color: 'white', fontSize: 32 }}>{name}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
        <ListItem containerStyle={{ backgroundColor: '#7a7878' }} onPress={() => setChoosingCharacterToReplace(false)}>
          <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text />
            <ListItem.Title style={{
              fontFamily: 'theme',
              fontSize: 24,
              color: 'white'
            }}>
              Fechar
            </ListItem.Title>
            <Icon
              name="sign-out"
              type="font-awesome"
              size={24}
              color="white"
            />
          </ListItem.Content>
        </ListItem>
      </BottomSheet>

      <BottomSheet
        isVisible={changingColor}
      >
        <S.GenericBackground
          source={require('../../../../assets/images/fundo-preto.png')}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
        {colors.map(({ hex, label }) => (
          <ListItem
            key={hex}
            onPress={() => {
              setActiveColor({ hex, label });
              setChangingColor(false);
              character.color = { hex, label };
              characterService.setCurrentGame(character);
            }}
            containerStyle={{
              backgroundColor: 'transparent',
              padding: 0,
              height: 50,
              marginBottom: 10,
            }}
          >
            <S.GenericBackground
              source={{
                'Vermelho': RedBackground,
                'Verde': GreenBackground,
                'Azul': BlueBackground,
                'Amarelo': YellowBackground,
              }[label]}
              style={{ width: '100%', height: '100%' }}
            />
            <ListItem.Content>
              <ListItem.Title style={{
                fontFamily: 'theme',
                color: 'white',
                fontSize: 24,
              }}>
                {label}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
        <ListItem containerStyle={{ backgroundColor: 'black' }} onPress={() => setChangingColor(false)}>
          <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text />
            <ListItem.Title style={{
              fontFamily: 'theme',
              fontSize: 24,
              color: 'white'
            }}>
              Fechar
            </ListItem.Title>
            <Icon
              name="sign-out"
              type="font-awesome"
              size={24}
              color="white"
            />
          </ListItem.Content>
        </ListItem>
      </BottomSheet>
    </>
  )
};

export default Footer;