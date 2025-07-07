import { ThemedView } from '@/components/ThemedView';
import { useAudioPlayer } from 'expo-audio';
import React, { useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Example audio sources
const audioList = [
  {
    id: '1',
    title: 'Song One',
    source: require('@/assets/audio/your-audio-file.mp3'),
  },
  {
    id: '2',
    title: 'Song Two',
    source: require('@/assets/audio/your-second-audio-file.mp3'),
  },
  // Add more songs as needed
];

function Music() {
  const [currentSource, setCurrentSource] = useState(audioList[0].source);
  const player = useAudioPlayer(currentSource);

  const handlePlay = (source: any) => {
    setCurrentSource(source);
    setTimeout(() => {
      player.play();
    }, 100); // Ensures player updates to new source
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1 }}>
        <FlatList
          data={audioList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => handlePlay(item.source)}
            >
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ padding: 16 }}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 16 }}>
          <Button title="Play Sound" onPress={() => player.play()} />
          <Button
            title="Replay Sound"
            onPress={() => {
              player.seekTo(0);
              player.play();
            }}
          />
        </View>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
});

export default Music;