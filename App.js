import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";

import { getTextStyle } from "./utils/textStyle";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    "Raleway-Thin": require("./assets/fonts/Raleway-Thin.ttf"),
    "Raleway-ExtraLight": require("./assets/fonts/Raleway-ExtraLight.ttf"),
    "Raleway-Light": require("./assets/fonts/Raleway-Light.ttf"),
    "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf"),
    "Raleway-Medium": require("./assets/fonts/Raleway-Medium.ttf"),
    "Raleway-SemiBold": require("./assets/fonts/Raleway-SemiBold.ttf"),
    "Raleway-Bold": require("./assets/fonts/Raleway-Bold.ttf"),
    "Raleway-ExtraBold": require("./assets/fonts/Raleway-ExtraBold.ttf"),
    "Raleway-Black": require("./assets/fonts/Raleway-Black.ttf"),
    "Raleway-ThinItalic": require("./assets/fonts/Raleway-ThinItalic.ttf"),
    "Raleway-ExtraLightItalic": require("./assets/fonts/Raleway-ExtraLightItalic.ttf"),
    "Raleway-LightItalic": require("./assets/fonts/Raleway-LightItalic.ttf"),
    "Raleway-Italic": require("./assets/fonts/Raleway-Italic.ttf"),
    "Raleway-MediumItalic": require("./assets/fonts/Raleway-MediumItalic.ttf"),
    "Raleway-SemiBoldItalic": require("./assets/fonts/Raleway-SemiBoldItalic.ttf"),
    "Raleway-BoldItalic": require("./assets/fonts/Raleway-BoldItalic.ttf"),
    "Raleway-ExtraBoldItalic": require("./assets/fonts/Raleway-ExtraBoldItalic.ttf"),
    "Raleway-BlackItalic": require("./assets/fonts/Raleway-BlackItalic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.text1}>1 - This text uses a font</Text>
      <Text style={styles.text2}>2 - This text uses a font</Text>
      <Text style={styles.text3}>3 - This text uses a font</Text>
      <Text style={styles.text4}>4 - This text uses a font</Text>
      <Text style={styles.text5}>5 - This text uses a font</Text>
      <Text style={styles.text6}>6 - This text uses a font</Text>
      <Text style={styles.text7}>7 - This text uses a font</Text>
      <Text style={styles.text8}>8 - This text uses a font</Text>
      <Text style={styles.text9}>9 - This text uses a font</Text>
      <Text style={styles.text10}>10 - This text uses a font</Text>
      <Text style={styles.text11}>11 - This text uses a font</Text>
      <Text style={styles.text12}>12 - This text uses a font</Text>
      <Text style={styles.text13}>13 - This text uses a font</Text>
      <Text style={styles.text14}>14 - This text uses a font</Text>
      <Text style={styles.text15}>15 - This text uses a font</Text>
      <Text style={styles.text16}>16 - This text uses a font</Text>
      <Text style={styles.text17}>17 - This text uses a font</Text>
      <Text style={styles.text18}>18 - This text uses a font</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  text1: getTextStyle({
    fontFamily: "Raleway",
    fontWeight: "100",
    fontSize: 25,
  }),
  text2: getTextStyle({
    fontFamily: "Raleway",
    fontWeight: "200",
    fontSize: 25,
  }),
  text3: getTextStyle({
    fontFamily: "Raleway",
    fontWeight: "300",
    fontSize: 25,
  }),
  text4: getTextStyle({
    fontFamily: "Raleway",
    fontWeight: "400",
    fontSize: 25,
  }),
  text5: getTextStyle({
    fontFamily: "Raleway",
    fontWeight: "500",
    fontSize: 25,
  }),
  text6: getTextStyle({
    fontFamily: "Raleway",
    fontWeight: "600",
    fontSize: 25,
  }),
  text7: getTextStyle({
    fontFamily: "Raleway",
    fontWeight: "700",
    fontSize: 25,
  }),
  text8: getTextStyle({
    fontFamily: "Raleway",
    fontWeight: "800",
    fontSize: 25,
  }),
  text9: getTextStyle({
    fontFamily: "Raleway",
    fontWeight: "900",
    fontSize: 25,
  }),
  text10: getTextStyle({
    fontFamily: "Raleway",
    fontWeight: "100",
    fontStyle: "italic",
    fontSize: 25,
  }),
  text11: getTextStyle({
    fontFamily: "Raleway",
    fontWeight: "200",
    fontStyle: "italic",
    fontSize: 25,
  }),
  text12: getTextStyle({
    fontFamily: "Raleway",
    fontWeight: "300",
    fontStyle: "italic",
    fontSize: 25,
  }),
  text13: getTextStyle({
    fontFamily: "Raleway",
    fontWeight: "400",
    fontStyle: "italic",
    fontSize: 25,
  }),
  text14: getTextStyle({
    fontFamily: "Raleway",
    fontWeight: "500",
    fontStyle: "italic",
    fontSize: 25,
  }),
  text15: getTextStyle({
    fontFamily: "Raleway",
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: 25,
  }),
  text16: getTextStyle({
    fontFamily: "Raleway",
    fontWeight: "700",
    fontStyle: "italic",
    fontSize: 25,
  }),
  text17: getTextStyle({
    fontFamily: "Raleway",
    fontWeight: "800",
    fontStyle: "italic",
    fontSize: 25,
  }),
  text18: getTextStyle({
    fontFamily: "Raleway",
    fontWeight: "900",
    fontStyle: "italic",
    fontSize: 25,
  }),
});
