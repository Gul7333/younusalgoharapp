import { useColorScheme } from "@/hooks/useColorScheme";
import { useAudioPlayer } from "expo-audio";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useLayoutEffect, useState } from "react";

import {
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ThemedText } from "./ThemedText";

type Props = {
  handlePlay: (newUri: string, title:string) => void;
};
export default function LocalMusic({handlePlay}: Props) {
  const [albums, setAlbums] = useState<MediaLibrary.Album[] | null>(null);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions({granularPermissions:["audio"]});
  const isDark = useColorScheme() === "dark";

  const getAlbums = async () => {
    if (permissionResponse?.status !== "granted" ) {
      if(permissionResponse?.canAskAgain === false) {
        // Open device settings if permission can't be asked again
        // Use Linking.openSettings from react-native
        // import Linking at the top: import { Linking } from "react-native";
        Linking.openSettings();
        return;
      }
      const { status } = await requestPermission();
      if (status !== "granted") return;
    }

    const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
      includeSmartAlbums: true,
    });

    setAlbums(fetchedAlbums);
  };
  useLayoutEffect(() => { 
    getAlbums();
  }, []);
      if(permissionResponse?.status !== "granted") {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadButton}>
          <ThemedText style={styles.loadButtonText}>
            🎵 Local Music Access Required
          </ThemedText>
          <Pressable onPress={()=>getAlbums()} >
            <ThemedText>

            Request Permission again
            </ThemedText>

          </Pressable>

        </View> 
      </SafeAreaView>
    );
      }

  return (
    <SafeAreaView style={[styles.container, ]}>
      <View style={styles.loadButton} >
        <ThemedText style={styles.loadButtonText}>🎵 Locally Saved Music</ThemedText>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {albums &&
          albums.map((album) => <AlbumEntry key={album.id} album={album} handlePlay={handlePlay} />)}
      </ScrollView>
    </SafeAreaView>
  );
}

function AlbumEntry({ album,handlePlay }: { album: MediaLibrary.Album, handlePlay: (newUri: string,title:string) => void }) {
  const [assets, setAssets] = useState<MediaLibrary.Asset[]>([]);
  const [currentUri, setCurrentUri] = useState<string | null>(null);
  const isDark = useColorScheme() === "dark";

  const player = useAudioPlayer(currentUri);
  useEffect(() => {
    const fetchAssets = async () => {
      const assetResult = await MediaLibrary.getAssetsAsync({
        mediaType: MediaLibrary.MediaType.audio,
        album,
      });
      setAssets(assetResult.assets);
    };
    fetchAssets();
  }, [album]);

  // // Call this on tap
  // const handlePlay = (newUri: string) => {
  //   if (currentUri === newUri) {
  //     player.playing ? player.pause() : player.play();
  //   } else {
  //     setCurrentUri(newUri); // Actual playing will happen in useEffect
  //   }
  // };

  // // useEffect to handle the async nature of state update
  // useEffect(() => {
  //   if (!currentUri) return;

  //   const playNew = () => {
  //     if (player.playing) {
  //       player.pause();
  //     }
  //     player.replace(currentUri);
  //     player.play();
  //   };

  //   playNew();
  // }, [currentUri]);
  if (assets.length === 0) {
    return null; // Skip rendering if no assets
  }

  return (
    <View style={[styles.albumCard ,{ backgroundColor: isDark ? "#1f2937" : "#f8fafc"} ]}>
      <ThemedText style={styles.albumTitle}>{album.title}</ThemedText>
      <View style={styles.audioList}>
        {assets.map((asset) => (
          <Pressable
            key={asset.id}
            onPress={() => handlePlay(asset.uri,asset.filename)}
            style={[styles.audioItem, { backgroundColor: isDark ? "#374151" : "#e5e7eb" }, currentUri === asset.uri && styles.audioItemPressed]}
          >

            <ThemedText style={styles.audioText}>{asset.filename}</ThemedText>
            <View style={{flex: 1, flexDirection: "row", justifyContent: "flex-start", gap: 7}}>

            <ThemedText style={styles.audioText}>{Math.floor(asset.duration / 60)}:{("0" + Math.floor(asset.duration % 60)).slice(-2)}</ThemedText>
            <ThemedText style={styles.audioText}>{album.title}</ThemedText>
            </View>
          </Pressable>
        ))}
      </View>
      <Text style={styles.trackCount}>🎧 {assets.length} Tracks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  scrollContainer: {
    paddingBottom: 100,
  },
  loadButton: {
  
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
    // shadowColor: "#000",
    // shadowOpacity: 0.1,
    // shadowOffset: { width: 0, height: 2 },
    // elevation: 4,
  },
  loadButtonText: {
    // color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  albumCard: {
    borderRadius: 16,
    padding: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  albumTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
    // color: "#1f2937",
  },
  audioList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  audioItem: {
    // backgroundColor: "#e5e7eb",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    minWidth: "45%",
    marginBottom: 10,
  },
  audioItemPressed: {
    backgroundColor: "#d1d5db",
  },
  audioText: {
    // color: "#111827",
    fontSize: 14,
    fontWeight: "500",
  },
  trackCount: {
    marginTop: 10,
    fontSize: 13,
    color: "#6b7280",
  },
});
