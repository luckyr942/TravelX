import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { fetchDestinations } from "../api/unsplash"; // ✅ CORRECT PATH
import colors from "../constants/colors";

export default function CountryScroll() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    loadCountries();
  }, []);

  const loadCountries = async () => {
    const data = await fetchDestinations("travel country", 1, 10);

    const unique = new Map();

    data.forEach((item) => {
      if (!unique.has(item.location)) {
        unique.set(item.location, {
          id: item.id,
          name: item.location,
          image: item.image,
        });
      }
    });

    setCountries(Array.from(unique.values()));
  };

  return (
    <FlatList
      data={countries}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.text} numberOfLines={1}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  item: {
    alignItems: "center",
    marginRight: 16,
    width: 70,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  text: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: "500",
    color: colors.text,
    textAlign: "center",
  },
});
