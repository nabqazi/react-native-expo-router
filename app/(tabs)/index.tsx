import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TitleText,
  HeaderView,
  ScreenView,
} from "../../components/Themed";
import { NotificationIcon, SearchIcon } from "../../assets/svgs";

export default function index() {
  return (
    <SafeAreaView>
      <ScreenView>
        <HeaderView>
          <TitleText>Home</TitleText>
          <View style={styles.headerIcons}>
            <NotificationIcon style={styles.iconMargins} />
            <SearchIcon style={styles.iconMargins} />
          </View>
        </HeaderView>
        <View>
          <Text>home sdsdasdsa sa d asd s</Text>
          <Text>home sdsdasdsa sa d asd s</Text>
          <Text>home sdsdasdsa sa d asd s</Text>
          <Text>home sdsdasdsa sa d asd s</Text>
          <Text>home sdsdasdsa sa d asd s</Text>
        </View>
      </ScreenView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerIcons: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  iconMargins: {
    marginLeft: 10,
    marginBottom: 2,
  },
});
