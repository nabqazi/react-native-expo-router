import { Button, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect } from "react";
import { Link, useNavigation } from "expo-router";
import LoginForm from "../../components/LoginForm";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <LoginForm></LoginForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
