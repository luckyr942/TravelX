import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PlaceDetails() {
  const router = useRouter();
  const {
    image,
    name,
    location,
    photographer,
    photographerUrl,
  } = useLocalSearchParams();

  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: image }} style={styles.image} />

      {/* bACK BUTTON  */}
      <TouchableOpacity
         style={styles.backButton}
         onPress={() => router.back()}
         activeOpacity={0.7}
      >
        <Ionicons name="chevron-back" size={23} color="#fff"/>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.location}>{location}</Text>

        <Text style={styles.desc}>
          Discover beautiful views, culture, food, and
          unforgettable travel experiences.
        </Text>

        {photographer ? (
          <Text
            style={styles.credit}
            onPress={() => Linking.openURL(photographerUrl)}
          >
            📸 Photo by {photographer}
          </Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 320,
  },
  backButton:{
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 20,
    padding: 6,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  location: {
    marginTop: 6,
    color: "#555",
  },
  desc: {
    marginTop: 16,
    fontSize: 14,
    lineHeight: 22,
    color: "#666",
  },
  credit: {
    marginTop: 20,
    color: "#007AFF",
  },
});
