import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Lato: require("../assets/fonts/Lato.ttf"),
    HelveticaNeue: require("../assets/fonts/Helvetica-Neue.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  // custom theme overriding default theme
  const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#FFFFFF",
    },
  };

  return (
    <>
      <StatusBar style="dark" />
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : customTheme}>
        {/* <ThemeProvider value={DefaultTheme}> */}
        <SafeAreaProvider>
          <Stack>
            {/* <Stack.Screen
            name="(auth)/sign-in"
            options={{
              headerShown: false,
              title: "Sign In",
            }}
          /> */}
            {/* <Stack.Screen name="register" options={{ presentation: "modal" }} /> */}

            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            {/* <Stack.Screen name="modal" options={{ presentation: "modal" }} /> */}
            {/* <Stack.Screen
            name="screens/settings"
            options={{
              headerShown: false,
              title: "Settings",
            }}
            />
            <Stack.Screen
            name="screens/edit-profile"
            options={{
              headerShown: false,
              title: "Edit Profile",
            }}
          /> */}
          </Stack>
        </SafeAreaProvider>
      </ThemeProvider>
    </>
  );
}
