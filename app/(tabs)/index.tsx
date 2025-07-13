import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";

const pdfs = [
  {
    title: "Dastoor e Riaz (Urdu)",
    thumbnail: require("../../assets/pdf/dastoor riaz urdu.png"),
  },
  {
    title: "Deewan e Shahi (Hindi)",
    thumbnail: require("../../assets/pdf/devaan shahi.png"),
  },
  {
    title: "Deewan e Shahi (Urdu)",
    thumbnail: require("../../assets/pdf/devaan shahi.png"),
  },
  {
    title: "Imam-Al-Mubeen (Urdu)",
    thumbnail: require("../../assets/pdf/imam mubeen.png"),
  },
  {
    title: "Malfuzate Mehdi (Hindi)",
    thumbnail: require("../../assets/pdf/malfuzat mehdi urdu.png"),
  },
  {
    title: "Nisab E Mehdi (Urdu)",
    thumbnail: require("../../assets/pdf/nisab mehdi.png"),
  },
  {
    title: "Rukhsar e Riaz (Hindi)",
    thumbnail: require("../../assets/pdf/rukhsar riaz hindi.png"),
  },

  {
    title: "Spiritual Detox - Cognitive Cleansing",
    thumbnail: require("../../assets/pdf/spritual detox.jpg"), // You might want to add a specific thumbnail for this
  },
  {
    title: "The Art of Living",
    thumbnail: require("../../assets/pdf/the art of living.jpg"), // You might want to add a specific thumbnail for this
  },
];

export default function Home() {
  const router = useRouter();
  const colorScheme = useColorScheme()
  const backgroundColor = useThemeColor({},"background")
  
  
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 20 }} >
      <FlatList
        data={pdfs}
        keyExtractor={(item) => item.title}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/viewer",
                params: { title: item.title },
              })
            }
            style={({ pressed }) => ({
              marginBottom: 16,
              backgroundColor: backgroundColor,
              borderRadius: 12,
              padding: 16,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3,
              transform: [{ scale: pressed ? 0.98 : 1 }],
            })}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 8,
                  backgroundColor: "#f5f5f5",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 16,
                  overflow: "hidden",
                }}
              >
                <Image
                  source={item.thumbnail}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    marginBottom: 4,
                    color: colorScheme === "light" ? "#333": "#fff",
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#666",
                  }}
                >
                  {item.subtitle || "PDF Document"}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </View>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}
