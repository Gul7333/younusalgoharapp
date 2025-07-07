import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Linking, ScrollView, StyleSheet } from "react-native";

const ProfileScreen = () => {
  const openALRATV = () => {
    Linking.openURL("https://www.youtube.com/@ALRATV");
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <Image
          source={require("@/assets/pdf/15.jpg")}
          style={styles.profileImage}
        />
        <ThemedText style={styles.title}>Younus AlGohar</ThemedText>
        <ThemedText style={styles.subtitle}>
          Representative of Riaz Ahmed Gohar Shahi
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>
          About Younus AlGohar
        </ThemedText>
        <ThemedText style={styles.text}>
          Younus AlGohar is the only official representative of Riaz Ahmed Gohar
          Shahi. He is responsible for spreading the divine mission of Gohar
          Shahi, which is the message of God's love for every soul. He is also
          the founder of Mehdi Foundation International and promotes the belief
          that Gohar Shahi is the Promised Messiah, Imam Mehdi, and Kalki
          Avatar.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Early Life</ThemedText>
        <ThemedText style={styles.text}>
          Younus AlGohar was born on 16 June 1968 in Karachi, Pakistan. His
          father was a Sunni Muslim and a small businessman. Younus AlGohar grew
          up in Karachi and was deeply religious from a very young age. However,
          He soon became disillusioned by the conflicting views of Sunni and
          Wahhabi sects, as there were two separate mosques in their town
          representing each ideology.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>
          Meeting Gohar Shahi (1983)
        </ThemedText>
        <ThemedText style={styles.text}>
          During 1983 , at the age of 15 He first encountered His Master Riaz
          Ahmed Gohar Shahi. He tells:{"\n"} One day at school, Younus AlGohar
          overheard his friend trying to convince another student to visit and
          learn about the teachings of Gohar Shahi. The other student refused,
          but Younus felt moved by the conversation. He approached his friend
          and said, "If he’s not going, I will go with you instead." When Younus
          AlGohar met Gohar Shahi for the first time, he experienced a profound
          spiritual awakening. Just 30 minutes after the meeting, his heart
          began chanting the name of God on its own. This moment marked the
          beginning of a deep and powerful connection with Gohar Shahi. After
          that, he remained a devoted follower of Ra Gohar Shahi, learning
          directly from Him and wholeheartedly embracing His divine mission.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>
          Time Spent with Gohar Shahi
        </ThemedText>
        <ThemedText style={styles.text}>
          He spent most of his time with Gohar Shahi, traveling to different
          countries to spread the mission of God's love and heart awakening. As
          a devoted follower, he dedicated himself completely to this spiritual
          path and gained a special place in the eyes of Gohar Shahi.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Education</ThemedText>
        <ThemedText style={styles.text}>
          • Urdu Science College{"\n"}• MA in Islamic Studies from University of
          Karachi{"\n"}• Spiritual education from Gohar Shahi and other saints
          through practical spirituality.{"\n"}
          {"\n"}
          He says that he received spiritual education directly from Gohar Shahi
          and also from other saints of God. With the help and guidance of Gohar
          Shahi, his inner spiritual bodies would come out and travel to
          spiritual schools, where they gained divine knowledge. During these
          spiritual journeys, he learned the teachings of the Qur’an directly
          from Sheikh Abdul Qadir Jilani and even from the Prophet Muhammad
          (PBUH). He also says that he has knowledge of 21 different tafaseer
          (interpretations) of the Qur’an. All of this happened under the
          spiritual guidance and support of Gohar Shahi, through a process known
          as practical spirituality—where the soul and spiritual bodies leave
          the physical body and interact with holy personalities in the
          spiritual world.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>
          Key Beliefs & Claims
        </ThemedText>
        <ThemedView style={styles.beliefItem}>
          <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
          <ThemedText style={styles.beliefText}>
            Prophet Muhammad (SAW) is the final prophet
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.beliefItem}>
          <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
          <ThemedText style={styles.beliefText}>
            Younus AlGohar believes that all religions were created by the same
            God, and their true purpose is to lead people back to Him. He
            teaches that religion should never be a reason to fight or hate
            others. Instead, He promotes peace, tolerance, and divine love as
            the core message of every faith.
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.beliefItem}>
          <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
          <ThemedText style={styles.beliefText}>
            Has visited Aalam-e-Ghaib (unseen realm)
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.beliefItem}>
          <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
          <ThemedText style={styles.beliefText}>
            He believes that Riaz Ahmed Gohar Shahi also came from Aalam-e-Ghaib
            and has a unique realm there called Riaz-ul-Jannah
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.beliefItem}>
          <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
          <ThemedText style={styles.beliefText}>
            He has seen and met many saints, prophets, and even God (Allah), and
            has spoken with them during spiritual experiences.
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.beliefItem}>
          <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
          <ThemedText style={styles.beliefText}>
            He claims that the image of Gohar Shahi has miraculously appeared on
            the Moon, the Sun, the Black Stone, and in space, as a divine sign.
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.beliefItem}>
          <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
          <ThemedText style={styles.beliefText}>
            He believes in practical spirituality, where the spiritual bodies of
            a person can travel to higher realms to gain divine knowledge and
            meet holy personalities.
          </ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Current Mission</ThemedText>
        <ThemedText style={styles.text}>
          Younus AlGohar's mission is to spread the spiritual teachings and
          divine message of Riaz Ahmed Gohar Shahi, whom he believes to be the
          Promised Imam Mehdi, Messiah, and Kalki Avatar. He says that clear
          signs from God have appeared to support this claim — such as the image
          of Gohar Shahi appearing on the Moon, the Sun, the Black Stone, and
          other sacred places.{"\n"}
          Based in London, Younus AlGohar runs ALRA TV with daily 2.5-hour live
          sessions teaching practical spirituality. His mission focuses on:
        </ThemedText>
        <ThemedView style={styles.missionItem}>
          <Ionicons name="heart" size={16} color="#E91E63" />
          <ThemedText style={styles.missionText}>
            Awakening hearts through divine love
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.missionItem}>
          <Ionicons name="globe" size={16} color="#2196F3" />
          <ThemedText style={styles.missionText}>
            International travel for spiritual gatherings
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.missionItem}>
          <Ionicons name="book" size={16} color="#673AB7" />
          <ThemedText style={styles.missionText}>
            Authoring spiritual books
          </ThemedText>
        </ThemedView>

        <ThemedText style={styles.linkText} onPress={openALRATV}>
          Watch ALRA TV on YouTube
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Published Books</ThemedText>
        <ThemedView style={styles.bookItem}>
          <Ionicons name="bookmark" size={16} color="#FF9800" />
          <ThemedText style={styles.bookText}>Dastoor e Riaz</ThemedText>
        </ThemedView>
        <ThemedView style={styles.bookItem}>
          <Ionicons name="bookmark" size={16} color="#FF9800" />
          <ThemedText style={styles.bookText}>Imam um Mubeen</ThemedText>
        </ThemedView>
        <ThemedView style={styles.bookItem}>
          <Ionicons name="bookmark" size={16} color="#FF9800" />
          <ThemedText style={styles.bookText}>Rukhsar e Riaz</ThemedText>
        </ThemedView>
        <ThemedView style={styles.bookItem}>
          <Ionicons name="bookmark" size={16} color="#FF9800" />
          <ThemedText style={styles.bookText}>Nisab e Mehdi</ThemedText>
        </ThemedView>
        <ThemedView style={styles.bookItem}>
          <Ionicons name="bookmark" size={16} color="#FF9800" />
          <ThemedText style={styles.bookText}>Malfuzat e Mehdi</ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    // color: "#333",
  },
  subtitle: {
    fontSize: 16,
    // color: "#666",
    marginTop: 4,
  },
  section: {
    marginBottom: 24,
    // backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    // color: "#444",
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 8,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    // color: "#555",
  },
  beliefItem: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 8,
  },
  beliefText: {
    marginLeft: 8,

    fontSize: 14,
    // color: "#555",
  },
  missionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  missionText: {
    marginLeft: 8,
    fontSize: 14,
    // color: "#555",
  },
  bookItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    // backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
  },
  bookText: {
    marginLeft: 8,
    fontSize: 14,
    // color: "#333",
  },
  linkText: {
    color: "#1E88E5",
    marginTop: 12,
    textDecorationLine: "underline",
  },
});

export default ProfileScreen;
