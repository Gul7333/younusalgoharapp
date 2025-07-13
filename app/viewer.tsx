import AsyncStorage from '@react-native-async-storage/async-storage';
import { Asset } from "expo-asset";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useLayoutEffect, useState } from "react";
import { SafeAreaView, StyleSheet, useWindowDimensions } from "react-native";
import Pdf from "react-native-pdf";

export default function Viewer() {
  const { width, height } = useWindowDimensions();
  const { title } = useLocalSearchParams();
  const [pdfUri, setPdfUri] = useState<string | null>(null);
  const[firstPage, setFirstPage] = useState<number>(1);

  const navigation = useNavigation();
const storeLastPage = async (value: string, bookname: string) => {
  try {
    await AsyncStorage.setItem(bookname, value);
  } catch (e) {
    // saving error
  }
};
const getLastPage = async (bookname: string) => {
  try {
    const value = await AsyncStorage.getItem(bookname);
    if (value !== null) {
      // value previously stored
      setFirstPage(parseInt(value, 10));
    }
  } catch (e) {
    // error reading value

  }
};
  const pdfMap: any = {
    "Dastoor e Riaz (Urdu)": require("@/assets/pdf/Dastoor e Riaz urdu.pdf"),
    "Deewan e Shahi (Hindi)": require("@/assets/pdf/Deewan e Shahi Hindi.pdf"),
    "Deewan e Shahi (Urdu)": require("@/assets/pdf/Dewan e Shahi Urdu.pdf"),
    "Imam-Al-Mubeen (Urdu)": require("@/assets/pdf/Imam-Al-Mubeen Urdu.pdf"),
    "Malfuzate Mehdi (Hindi)": require("@/assets/pdf/Malfuzate_Mehdi_Hindi.pdf"),
    "Nisab E Mehdi (Urdu)": require("@/assets/pdf/Nisab_E_Mehdi Urdu.pdf"),
    "Rukhsar e Riaz (Hindi)": require("@/assets/pdf/Rukhsar e Riaz (Hindi).pdf"),
    "Spiritual Detox - Cognitive Cleansing": require("@/assets/pdf/Spiritual Detox - Cognitive Cleansing By Younus AlGohar.pdf"),
    "The Art of Living": require("@/assets/pdf/The Art of Living.pdf"),
  };

  const source = pdfMap[title as string];
  useLayoutEffect(() => {
    if (title) {
      navigation.setOptions({ title });
    }
  }, [title]);
  useEffect(() => {
    const loadPdf = async () => {
      const asset = Asset.fromModule(pdfMap[title as string]);
      await asset.downloadAsync();
      setPdfUri(asset.localUri); // URI for react-native-pdf
    };
    loadPdf();
    getLastPage(title as string)
  }, [title]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* AppBar */}

      {/* PDF Viewer */}
      {/* <ScrollView showsVerticalScrollIndicator={true} showsHorizontalScrollIndicator={true} scrollEnabled={true} horizontal={false}> */}

      <Pdf
      showsVerticalScrollIndicator={true}
       
      // showsHorizontalScrollIndicator={true}
      scrollEnabled={true}
      horizontal={false}

      onPageChanged={(page, numberOfPage) => {storeLastPage(page.toString(), title as string);}}
      page={firstPage}
      trustAllCerts={false}
      source={{ uri: pdfUri || undefined, cache: true }}
      style={{ flex: 1, width, height: height - 56 }} // Adjust height for appbar
      // onLoadComplete={(n) => console.log("Loaded PDF:", n)}
      // onError={(e) => console.log("Error loading PDF", e)}
      />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 56,
    backgroundColor: "#6200EE", // Purple color, change as needed
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    flex: 1,
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});
