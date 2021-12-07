import React from 'react'
import { Button, Dialog } from 'react-native-elements'
import characterService from '../../../../core/services/characterService';
import { AppText } from '../../../../shared/components';
import { THEME } from '../../../../styles/theme';

import * as S from './styled';

const Memories = () => {
  const [showingMemories, setShowMemories] = React.useState(false);
  const [character, setCharacter] = React.useState(null);
  const [memories, setMemories] = React.useState([]);
  const [sortedMemory, setSortedMemory] = React.useState(null);
  const [memorySet, setMemorySet] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const storedCharacter = await characterService.getCurrentGame();
      setCharacter(storedCharacter);

      const set = storedCharacter.stats.Tristeza > 1 ? 'secondSet' : 'firstSet';
      setMemorySet(set);
      setMemories(
        storedCharacter.memories[set].map(memory => memory)
      );
    })();
  }, [showingMemories]);

  return (
    <>
      <Dialog
        overlayStyle={{ backgroundColor: 'black' }}
        isVisible={!!sortedMemory}
      >
        <AppText size={24} text="Lembranças" style={{ marginBottom: 20 }} />
        <AppText size={22} text={sortedMemory?.memory} style={{ color: 'white' }} />
        <Button
          title="Fechar"
          onPress={() => {
            const memoryIndex = character.memories[memorySet].findIndex((memory) => (
              memory.rolls === sortedMemory.rolls)
            );
            character.memories[memorySet][memoryIndex] = { ...sortedMemory };
            characterService.setCurrentGame(character);
            setSortedMemory(null);
          }}
          titleStyle={{ fontFamily: THEME.fontName, fontSize: 24 }}
          buttonStyle={{
            backgroundColor: THEME.colors.buttons.danger,
            marginTop: 20,
          }}
        />
      </Dialog>

      <Dialog
        overlayStyle={{ backgroundColor: 'black' }}
        isVisible={showingMemories}
      >
        <AppText text="Lembranças" style={{ fontSize: 32 }} />
        <S.MemoriesContainer>
          <AppText
            size={18}
            color="white"
            text={`${character?.name} possui ${character?.stats.Tristeza} de tristeza.`}
          />
          <AppText
            size={18}
            color="white"
            text="Role o dado e veja o respectivo resultado."
          />
        </S.MemoriesContainer>
        {memories.map(memory => (
          <S.Memory
            key={memory.rolls}
            style={{
              backgroundColor: memory.used ? 'grey' : 'transparent',
            }}
          >
            <AppText
              size={24}
              text={memory.rolls}
              style={{ width: 50 }}
            />
            <Button
              title={memory.used ? "Rever" : "Visualizar"}
              titleStyle={{ fontSize: 18, marginRight: 20 }}
              icon={
                memory.used ? { name: 'unlock', type: 'font-awesome' } : { name: 'lock', type: 'font-awesome' }
              }
              iconRight
              onPress={() => {
                memory.used = true;
                setSortedMemory(memory);
                setShowMemories(false);
              }}
              buttonStyle={{
                backgroundColor: 'transparent',
                padding: 0,
              }}
            />
          </S.Memory>
        ))}
        <Button
          title="Fechar"
          onPress={() => setShowMemories(false)}
          buttonStyle={{
            backgroundColor: THEME.colors.buttons.danger,
            marginTop: 20,
          }}
        />
      </Dialog>
      <S.MemoriesContainer>
        <Button
          title="Lembranças"
          onPress={() => setShowMemories(true)}
          titleStyle={{
            fontFamily: THEME.fontName,
            fontSize: 24,
          }}
          buttonStyle={{
            opacity: 0.75,
            backgroundColor: 'black',
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
          iconRight
        />
      </S.MemoriesContainer>
    </>
  )
}

export default Memories
