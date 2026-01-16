import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

export default function FeaturedCard({ item }) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: `/place/${item.id}`,
          params: item,
        })
      }
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title} numberOfLines={1}>
        {item.name}
      </Text>
      <Text style={styles.location} numberOfLines={1}>
        {item.location}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 180,
    marginRight: 16,
  },
  image: {
    width: "100%",
    height: 130,
    borderRadius: 16,
  },
  title: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
  },
  location: {
    fontSize: 12,
    color: colors.muted,
    marginTop: 2,
  },
});
