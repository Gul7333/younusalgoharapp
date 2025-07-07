import { useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect } from 'react';
import { SafeAreaView, StyleSheet, useWindowDimensions } from "react-native";
import Pdf from "react-native-pdf";

export default function Viewer() {
  const { width, height } = useWindowDimensions();
  const { title } = useLocalSearchParams();
  const navigation = useNavigation();

  const pdfMap: any = {
    "Dastoor e Riaz (Urdu)": require("@/assets/pdf/Dastoor e Riaz urdu.pdf"),
    "Deewan e Shahi (Hindi)": require("@/assets/pdf/Deewan e Shahi Hindi.pdf"),
    "Deewan e Shahi (Urdu)": require("@/assets/pdf/Dewan e Shahi Urdu.pdf"),
    "Imam-Al-Mubeen (Urdu)": require("@/assets/pdf/Imam-Al-Mubeen Urdu.pdf"),
    "Malfuzate Mehdi (Hindi)": require("@/assets/pdf/Malfuzate_Mehdi_Hindi.pdf"),
    "Nisab E Mehdi (Urdu)": require("@/assets/pdf/Nisab_E_Mehdi Urdu.pdf"),
    "Rukhsar e Riaz (Hindi)": require("@/assets/pdf/Rukhsar e Riaz (Hindi).pdf"),
    "Spiritual Detox - Cognitive Cleansing": require("@/assets/pdf/Spiritual Detox - Cognitive Cleansing By Younus AlGohar.pdf"),
    "The Art of Living": require("@/assets/pdf/The Art of Living.pdf")
  };

  const source = pdfMap[title as string];
  useLayoutEffect(() => {
    if (title) {
      navigation.setOptions({ title });
    }
  }, [title]);
  return (
    <SafeAreaView style={{ flex: 1, }}>
      {/* AppBar */}
  

      {/* PDF Viewer */}
      <Pdf
        trustAllCerts={false}
        source={source}
        style={{ flex: 1, width, height: height - 56 }} // Adjust height for appbar
        onLoadComplete={(n) => console.log("Loaded PDF:", n)}
        onError={(e) => console.log("Error loading PDF", e)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 56,
    backgroundColor: '#6200EE', // Purple color, change as needed
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});