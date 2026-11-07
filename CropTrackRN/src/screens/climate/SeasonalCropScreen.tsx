import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SeasonalCropScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Seasonal Crop Advisor</Text>
      <Text style={styles.subtitle}>Based on current climate and upcoming weather patterns, here are the best crops to sow.</Text>

      <View style={styles.seasonCard}>
        <Text style={styles.seasonTitle}>☀️ Kharif Season (Monsoon)</Text>
        <Text style={styles.seasonDesc}>June to October</Text>
        <Text style={styles.cropList}>Recommended: Rice, Maize, Sorghum, Pearl Millet (Bajra), Soybean, Cotton.</Text>
        <View style={styles.alertBox}>
          <Text style={styles.alertText}>💡 Tip: Heavy rainfall expected this month. Ensure proper field drainage to prevent root rot in Soybean.</Text>
        </View>
      </View>

      <View style={styles.seasonCard}>
        <Text style={styles.seasonTitle}>❄️ Rabi Season (Winter)</Text>
        <Text style={styles.seasonDesc}>October to March</Text>
        <Text style={styles.cropList}>Recommended: Wheat, Barley, Oats, Chickpea, Mustard, Linseed.</Text>
        <View style={styles.alertBox}>
          <Text style={styles.alertText}>💡 Tip: Start land preparation for wheat before soils dry out completely from the monsoon.</Text>
        </View>
      </View>

      <View style={styles.seasonCard}>
        <Text style={styles.seasonTitle}>🌻 Zaid Season (Summer)</Text>
        <Text style={styles.seasonDesc}>March to June</Text>
        <Text style={styles.cropList}>Recommended: Watermelon, Muskmelon, Cucumber, Bitter Gourd, Fodder crops.</Text>
        <View style={styles.alertBox}>
          <Text style={styles.alertText}>💡 Tip: Ensure robust irrigation systems are in place as moisture levels drop rapidly.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#f9f9f9' },
  header: { fontSize: 24, fontWeight: 'bold', color: '#1B5E20', marginBottom: 5, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#555', marginBottom: 20, textAlign: 'center' },
  seasonCard: { backgroundColor: 'white', padding: 20, borderRadius: 10, marginBottom: 20, elevation: 2, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
  seasonTitle: { fontSize: 18, fontWeight: 'bold', color: '#2E7D32', marginBottom: 5 },
  seasonDesc: { fontSize: 14, color: '#888', fontStyle: 'italic', marginBottom: 10 },
  cropList: { fontSize: 15, color: '#333', marginBottom: 15, lineHeight: 22 },
  alertBox: { backgroundColor: '#E3F2FD', padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#64B5F6' },
  alertText: { fontSize: 13, color: '#1565C0', fontStyle: 'italic' }
});
