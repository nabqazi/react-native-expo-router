import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../../components/Themed";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import EditProfileForm from "../../components/EditProfileForm";

export default function EditProfile() {
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
              size={24}
              name="chevron-left"
              color="black"
            />
          </TouchableOpacity>
          <Text style={[styles.heading5]}>Edit Profile</Text>
        </View>
        <EditProfileForm />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
  },

  backIcon: {
    alignSelf: "center",
    paddingLeft: 16,
    paddingRight: 23,
    paddingTop: 4,
  },

  heading5: {
    fontSize: 25,
    fontFamily: "Helvetica Neue",
    fontWeight: "700",
    lineHeight: 36,
  },
});
