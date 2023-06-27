import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View } from "./Themed";

export const ScreenRootView = (props: { children?: React.ReactNode }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>{props.children}</View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
