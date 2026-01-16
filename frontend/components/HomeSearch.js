import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../constants/colors";

export default function HomeSearch({ value, onChange, onSubmit}) {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Ionicons name="search" size={18} color={colors.muted} />
        <TextInput
          placeholder="Search places, cities, beaches..."
          style={styles.input}
          value={value}
          onChangeText={onChange}
          onSubmitEditing={onSubmit}
          returnKeyType="search"
        />
      </View>

      <View style={styles.locationChip}>
        <Text style={styles.locationText}>India</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingToo:10,
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lightGray,
    padding: 14,
    borderRadius: 14,
  },
  input: {
    marginLeft: 8,
    fontSize: 14,
    flex: 1,
  },
  locationChip: {
    marginLeft: 10,
    backgroundColor: colors.primary,
    paddingHorizontal: 14,
    justifyContent: "center",
    borderRadius: 14,
  },
  locationText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
});
