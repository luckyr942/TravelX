import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function PopularCard({ item }) {
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
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.location}>{item.location}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 18,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  location: {
    marginTop: 4,
    color: "#666",
  },
});
