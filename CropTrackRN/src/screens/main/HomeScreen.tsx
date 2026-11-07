import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeInfo}>Welcome to CropTrack</Text>
      
      <View style={styles.grid}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Crop Recommendation')}>
          <Text style={styles.cardTitle}>🌾 Crop AI Expert</Text>
          <Text style={styles.cardDesc}>Get real AI-based crop recommendations for your soil data.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Disease Detection')}>
          <Text style={styles.cardTitle}>📸 AI Health Check</Text>
          <Text style={styles.cardDesc}>Analyze plant images to detect diseases and health status.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Climate')}>
          <Text style={styles.cardTitle}>🌤️ Climate & Weather</Text>
          <Text style={styles.cardDesc}>View your local environmental data.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => alert('Coming Soon!')}>
          <Text style={styles.cardTitle}>🚜 Rent Equipment</Text>
          <Text style={styles.cardDesc}>Find and rent agricultural utilities and tools.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20 },
  welcomeInfo: { fontSize: 24, fontWeight: 'bold', color: '#1B5E20', marginBottom: 20, marginTop: 10 },
  grid: { flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '48%',
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  cardDesc: { fontSize: 12, color: '#666' }
});
