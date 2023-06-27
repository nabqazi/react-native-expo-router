import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import EditProfileForm from "../../components/EditProfileForm";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={styles.heading5}>My Profile</Text>
        <EditProfileForm></EditProfileForm>
      </View>

      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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

  heading5: {
    fontSize: 25,
    fontFamily: "Helvetica Neue",
    fontWeight: "700",
    lineHeight: 36,
  },
});
