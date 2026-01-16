import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FeaturedCard from "../../components/FeaturedCard";
import HomeHeader from "../../components/HomeHeader";
import HomeSearch from "../../components/HomeSearch";
import PopularCard from "../../components/PopularCard";

import { fetchDestinations } from "../../api/unsplash";

export default function Home() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    loadDestinations("famous travel destination");
  }, []);

  const loadDestinations = async (searchQuery) => {
    setLoading(true);
    const data = await fetchDestinations(searchQuery);
    setDestinations(data);
    setLoading(false);
  };

  const handleSearch = () => {
    if (!query.trim()) return;
    loadDestinations(query);
  };

  if (loading && destinations.length === 0) {
    return <ActivityIndicator style={{ flex: 1 }} />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#D2E3FC" }}>
    <FlatList
      data={destinations.slice(6)}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <PopularCard item={item} />
      )}
      ListHeaderComponent={
        <>
          <HomeHeader />

          <Text style={styles.title}>
            Where do you want to go? ✈️
          </Text>

          {/* 🔥 SEARCH WIRED */}
          <HomeSearch
            value={query}
            onChange={setQuery}
            onSubmit={handleSearch}
          />

          <Text style={styles.sectionTitle}>
            Featured Destinations
          </Text>

          <FlatList
            data={destinations.slice(0, 6)}
            horizontal
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            renderItem={({ item }) => (
              <FeaturedCard item={item} />
            )}
          />

          <Text style={styles.sectionTitle}>
            Popular Right Now
          </Text>

          {loading && (
            <ActivityIndicator style={{ marginVertical: 20 }} />
          )}
        </>
      }
    />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 20,
    marginTop: 28,
    marginBottom: 12,
  },
});
