import React from "react";
import { ScreenRootView } from "../../components/ScreenRootView";
import LoginForm from "../../components/LoginForm";
import { Text, View } from "react-native";
import { useAuth } from "../context/auth";

export default function SignIn() {
  // const { signIn } = useAuth();
  return (
    <ScreenRootView>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text onPress={() => alert("login")}>Sign In</Text>
      </View>
    </ScreenRootView>
  );
}
