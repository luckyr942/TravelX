import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Find your</Text>
            <Text style={styles.brandText}>favorite place</Text>
          </View>
          <Ionicons name="notifications-outline" size={28} color="black" />
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#7D7D7D" />
          <TextInput placeholder="Search destination" style={styles.searchInput} />
        </View>

        {/* Categories Section */}
        <View style={styles.categoryContainer}>
           <Text style={[styles.categoryText, styles.activeCategory]}>Popular</Text>
           <Text style={styles.categoryText}>Camp</Text>
           <Text style={styles.categoryText}>Cruise</Text>
           <Text style={styles.categoryText}>Hiking</Text>
        </View>

        <Text style={{ marginTop: 20 }}>More content (Cards) coming soon...</Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  content: { paddingHorizontal: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 },
  welcomeText: { fontSize: 24, color: '#1A1A1A' },
  brandText: { fontSize: 28, fontWeight: '800', color: '#1A1A1A' },
  searchContainer: { 
    flexDirection: 'row', 
    backgroundColor: '#F5F7FA', 
    borderRadius: 15, 
    padding: 15, 
    marginTop: 25, 
    alignItems: 'center' 
  },
  searchInput: { marginLeft: 10, fontSize: 16, flex: 1 },
  categoryContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 },
  categoryText: { fontSize: 16, color: '#7D7D7D' },
  activeCategory: { color: '#1A1A1A', fontWeight: '700', borderBottomWidth: 2, borderBottomColor: '#2F80ED' }
});