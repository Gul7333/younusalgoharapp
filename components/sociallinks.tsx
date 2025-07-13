import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Linking, StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./ThemedText";

type SocialLink = {
  name: string;
  icon: string;
  url: string;
  color: string;
};

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    icon: "logo-facebook",
    url: "https://www.facebook.com/riazul.jannah",
    color: "#3b5998",
  },
  {
    name: "YouTube",
    icon: "logo-youtube",
    url: "https://www.youtube.com/@alratv", // or use channel ID like /channel/abc123
    color: "#FF0000",
  },
  {
    name: "Twitter",
    icon: "logo-twitter",
    url: "https://x.com/YounusAlGohar", // remove @
    color: "#1DA1F2",
  },
];

export default function SocialLinks() {
  const openLink = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (e) {
      alert("Can't open URL: " + url);
    }
  };

  return (
    <View style={styles.container}>
      {socialLinks.map((link) => (
        <TouchableOpacity
          key={link.name}
          style={styles.item}
          onPress={() => openLink(link.url)}
        >
          <View style={[styles.circle, { backgroundColor: link.color }]}>
            <Ionicons name={link.icon} size={28} color="#fff" />
          </View>
          <ThemedText style={styles.label}>{link.name}</ThemedText>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // show in a row
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginVertical: 20,
    flexWrap: "wrap",
  },
  item: {
    alignItems: "center",
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30, // full circle
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
    elevation: 4, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    // color: '#444',
  },
});
