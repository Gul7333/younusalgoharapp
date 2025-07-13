import LocalMusic from "@/components/Localmusic";
import Equalizer from "@/components/wave";
import { useColorScheme } from "@/hooks/useColorScheme";
import Slider from "@react-native-community/slider";
import { setAudioModeAsync, useAudioPlayer, useAudioPlayerStatus } from "expo-audio";
import React, { useEffect, useState } from "react";

import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const audioList = [
  {
    id: "1",
    title: "Ho ke Zam zaat e Gohar Mein",
    source: require("@/assets/music/Ho Ke Zam Zaat e Gohar Mein (Echoes of Zikr) _ Qaseeda.m4a"),
  },
  {
    id: "2",
    title: "Main Ne Gohar Ko Paya Hai",
    source: require("@/assets/music/Main Ne Gohar Ko Paya Hai - [Official Jashan e Riaz _21 Soundtrack].m4a"),
  },
];

function Music() {
  const [currentSource, setCurrentSource] = useState<string | null>(null);
  const player = useAudioPlayer(audioList[0].source);
  const [title, setTitle] = useState(audioList[0].title);
  const stat = useAudioPlayerStatus(player);
 
  
  const colorScheme = useColorScheme();
  setAudioModeAsync({
  shouldPlayInBackground: true,

   })
  const isDark = colorScheme === "dark";

  const sliderColors = {
    minimumTrackTintColor: isDark ? "#8b5cf6" : "#6366f1", // Indigo-500/600
    maximumTrackTintColor: isDark ? "#312e81" : "#c7d2fe", // Indigo-900/200
  };

  // const handlePlay = (source: any) => {
  //   if (currentSource === source) {
  //     player.playing ? player.pause() : player.play();
  //     return;
  //   }
  //   setCurrentSource(source);
  //   player.replace(source);
  //   player.seekTo(0);
  //   player.play();
  // };

  // Call this on tap
  const handlePlay = (newUri: string, title: string) => {
    if (currentSource === newUri) {
      player.playing ? player.pause() : player.play();
    } else {
      setCurrentSource(newUri); // Actual playing will happen in useEffect
      setTitle(title);
    }
  };

  // useEffect to handle the async nature of state update
  useEffect(() => {
    if (!currentSource) return;

    const playNew = () => {
      if (player.playing) {
        player.pause();
      }
      player.replace(currentSource);
      player.play();
    };

    playNew();
  }, [currentSource]);
  return (
    <SafeAreaView style={styles.flex1}>
      {/* <ScrollView
  contentContainerStyle={styles.listContent}
  showsVerticalScrollIndicator={false}
> */}

      <View style={styles.container}>
        <FlatList
          ListFooterComponent={<LocalMusic handlePlay={handlePlay} />}
          data={audioList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.cardBase,
                {
                  backgroundColor:
                    item.source === currentSource
                      ? "#6366f1"
                      : isDark
                      ? "#1f2937"
                      : "#fff",
                  borderColor:
                    item.source === currentSource
                      ? "#6366f1"
                      : isDark
                      ? "#374151"
                      : "#eee",
                  borderWidth: item.source === currentSource ? 2 : 1,
                },
              ]}
              onPress={() => handlePlay(item.source, item.title)}
              activeOpacity={0.85}
            >
              <View
                style={[
                  styles.iconCircle,
                  {
                    backgroundColor:
                      item.source === currentSource
                        ? "#fff"
                        : isDark
                        ? "#4b5563"
                        : "#e0e7ff",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.icon,
                    {
                      color:
                        item.source === currentSource
                          ? "#6366f1"
                          : isDark
                          ? "#dbeafe"
                          : "#4f46e5",
                    },
                  ]}
                >
                  {item.source === currentSource ? "🎵" : "▶️"}
                </Text>
              </View>
              <View style={styles.flex1}>
                <Text
                  style={[
                    styles.title,
                    {
                      color:
                        item.source === currentSource
                          ? "#fff"
                          : isDark
                          ? "#f3f4f6"
                          : "#222",
                      fontWeight: item.source === currentSource ? "700" : "500",
                    },
                  ]}
                  numberOfLines={1}
                >
                  {item.title}
                </Text>
                {item.source === currentSource && (
                  <Text
                    style={{
                      fontSize: 12,
                      color: isDark ? "#a5b4fc" : "#dbeafe",
                      marginTop: 2,
                    }}
                  >
                    Now Playing
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
        {/* <LocalMusic /> */}
        <View style={styles.controlsWrapper}>
          <View
            style={[
              styles.controlsContainer,
              {
                backgroundColor: isDark ? "#1f2937" : "#fff",
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => player.play()}
              style={[
                styles.playButton,
                {
                  backgroundColor: "#6366f1",
                  shadowColor: "#6366f1",
                },
              ]}
              activeOpacity={0.8}
            >
              {player.playing ? (
                <Equalizer />
              ) : (
                <Text style={styles.playIcon}>▶️</Text>
              )}
            </TouchableOpacity>

            <View style={styles.flex1}>
              <Text
                numberOfLines={1}
                style={[styles.songTitle, { color: isDark ? "#fff" : "#222" }]}
              >
                {title}
              </Text>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={1}
                onSlidingComplete={(value) => {
                  const newTime = value * stat.duration;
                  player.seekTo(newTime);
                }}
                value={stat.currentTime / stat.duration}
                minimumTrackTintColor={sliderColors.minimumTrackTintColor}
                maximumTrackTintColor={sliderColors.maximumTrackTintColor}
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                // player.seekTo(0);
                
                // player.play();
                player.playing ? player.pause() : player.play();
                // player.remove();
              }}
              style={[
                styles.replayButton,
                {
                  backgroundColor: isDark ? "#4b5563" : "#e0e7ff",
                },
              ]}
              activeOpacity={0.8}
            >
              
                <Text>

             {player.playing ?   "⏹️" : "▶️"}
                </Text>
              
               
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  cardBase: {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    marginBottom: 18,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  icon: {
    fontSize: 20,
  },
  title: {
    fontSize: 18,
  },
  listContent: {
    padding: 20,
    paddingBottom: 120,
  },
  controlsWrapper: {
    position: "absolute",
    bottom: 24,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  controlsContainer: {
    width: "92%",
    height: 80,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  playButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 22,
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 2,
  },
  playIcon: {
    color: "#fff",
    fontSize: 28,
  },
  songTitle: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 2,
  },
  replayButton: {
    marginLeft: 22,
    padding: 10,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  replayIcon: {
    fontSize: 22,
  },
  slider: {
    height: 40,
  },
});

export default Music;
