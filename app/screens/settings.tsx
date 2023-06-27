import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useNavigation } from "expo-router";

export default function Settings() {
  // const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigateBack}>
            <FontAwesome
              style={styles.backIcon}
              name="chevron-left"
              size={30}
              color="black"
            />
          </TouchableOpacity>
          <Text style={[styles.heading5, styles.title]}>Settings</Text>
        </View>
        <ScrollView>
          <Text style={styles.label}>GENERAL</Text>
          <Text
            style={styles.link}
            onPress={() => {
              // @ts-ignore
              navigation.navigate("edit-profile");
            }}
          >
            Edit Profile
          </Text>
          <Text style={styles.link}>Edit Profile</Text>
          <Text style={styles.link}>Edit Profile</Text>
          <Text style={styles.label}>GENERAL</Text>
          <Text style={styles.link}>Edit Profile</Text>
          <Text style={styles.link}>Edit Profile</Text>
          <Text style={styles.link}>Edit Profile</Text>
          <Text style={styles.label}>GENERAL</Text>
          <Text style={styles.link}>Edit Profile</Text>
          <Text style={styles.link}>Edit Profile</Text>
          <Text style={styles.link}>Edit Profile</Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    alignContent: "center",
    lineHeight: 36,
  },
  backIcon: { paddingHorizontal: 5 },
  // TODO: should be in global styles
  heading5: {
    fontSize: 25,
    fontFamily: "Helvetica Neue",
    fontWeight: "700",
    lineHeight: 36,
  },
  title: {},
  label: {
    color: "#6D6D6D",
    fontSize: 16,
    fontWeight: "700",
    padding: 23,
  },
  link: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
    padding: 23,
    paddingLeft: 45,
  },
});
