import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../constants/colors";

export default function HomeHeader() {
    const router = useRouter();
  return (
    <View style={styles.container}>
      {/* LEFT: Profile */}
      <View style={styles.profileRow}>
        <TouchableOpacity onPress={() => router.push("/profile")}>
             <Image
               source={{ uri: "https://i.pravatar.cc/150?img=12" }}
               style={styles.avatar}
             />
        </TouchableOpacity>
       
        <View style={styles.textContainer}>
          <Text style={styles.name}>Lucky</Text>
          <Text style={styles.subtitle}>Basic Traveler</Text>
        </View>
      </View>

      {/* RIGHT: Bell */}
      <TouchableOpacity style={styles.bell}>
        <Ionicons name="notifications-outline" size={22} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: "15%",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },

  textContainer: {
    marginLeft: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
  },

  subtitle: {
    fontSize: 12,
    color: colors.muted,
    marginTop: 2,
  },

  bell: {
    backgroundColor: colors.lightGray,
    padding: 10,
    borderRadius: 12,
  },
});
