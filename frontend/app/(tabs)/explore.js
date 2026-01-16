import { fetchDestinations } from "@/api/unsplash";
import HomeSearch from "@/components/HomeSearch";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const CATEGORIES= [
    { label: "Beaches", query: "beautiful beaches travel" },
    { label: "Mountains", query: "mountain travel destinations" },
    { label: "Cities", query: "famous cities travel" },
    { label: "Nature", query: "nature travel destinations" },
    
];

export default function Explore(){
    const router = useRouter();

    const [query, setQuery] = useState("");
    const [activeQuery, setActiveQuery] = useState("popular travel destination");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadResults(activeQuery);
    }, [activeQuery]);

    const loadResults = async (searchQuery) =>{
        setLoading(true);
        const data = fetchDestinations(searchQuery);
        setResults(data);
        setLoading(false);
    };

    const handleSearch = () =>{
        if(!query.trim())  return;
        setActiveQuery(query);
        Keyboard.dismiss();
    }

    const renderItem = ({ item }) =>(
        <TouchableOpacity style = {styles.card} 
            onPress={() => router.push({
                pathname:`/place/${item.id}`,
                params: item,
            })
        }
        >
            <Image source={{uri:item.image}} style={styles.image} />
            <Text style={styles.title} numberOfLines={1}>
                {item.location}
            </Text>
        </TouchableOpacity>
    )

    return(
        <View style={styles.container}>
            {/* Header */}
            <Text style={styles.heading}> Explore Beyound Thinking</Text>

            {/* Search */}
            <View style={styles.searchBox}>
                <Ionicons name = "search" size={20} color="#888"/>
                <TextInput
                    placeholder="Search cities,beaches,destinations..."
                    style={styles.input}
                    value={query}
                    onChangeText={setQuery}
                    onSubmitEditing={handleSearch}
                    returnKeyType="search"
                />
            </View>
            <HomeSearch/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
      },
      heading: {
        fontSize: 28,
        fontWeight: "700",
        paddingHorizontal: 20,
        marginTop: 10,
      },
      searchBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F3F4F6",
        marginHorizontal: 20,
        marginTop: 16,
        borderRadius: 14,
        paddingHorizontal: 14,
        height: 48,
      },
      input: {
        flex: 1,
        marginLeft: 8,
        fontSize: 14,
      },

})