import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ClimateScreen() {
  // Mocking Climate Data that would typically come from an API (e.g., OpenWeatherMap)
  const climateData = {
    temp: 24.5,
    humidity: 65,
    condition: 'Partly Cloudy ⛅',
    rainfall: '10mm expected',
    wind: '12 km/h',
    soilTemp: 22.0
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Live Climate & Weather</Text>
      
      <View style={styles.card}>
        <Text style={styles.mainTemp}>{climateData.temp}°C</Text>
        <Text style={styles.condition}>{climateData.condition}</Text>
      </View>
      
      <View style={styles.grid}>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Humidity</Text>
          <Text style={styles.infoValue}>{climateData.humidity}%</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Rainfall</Text>
          <Text style={styles.infoValue}>{climateData.rainfall}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Wind Speed</Text>
          <Text style={styles.infoValue}>{climateData.wind}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Soil Temp</Text>
          <Text style={styles.infoValue}>{climateData.soilTemp}°C</Text>
        </View>
      </View>
      
      <View style={styles.alertBox}>
        <Text style={styles.alertTitle}>👨‍🌾 Farm Advisory</Text>
        <Text style={styles.alertMessage}>Good weather for crop spraying today. No heavy rain expected in the next 24 hours.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#f5f5f5', padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', color: '#1B5E20', marginBottom: 20, textAlign: 'center' },
  card: { backgroundColor: '#4CAF50', borderRadius: 15, padding: 30, alignItems: 'center', marginBottom: 20, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },
  mainTemp: { fontSize: 48, fontWeight: 'bold', color: 'white' },
  condition: { fontSize: 20, color: '#E8F5E9', marginTop: 10 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  infoBox: { width: '48%', backgroundColor: 'white', padding: 15, borderRadius: 10, marginBottom: 15, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 3, elevation: 2 },
  infoLabel: { fontSize: 14, color: '#666', marginBottom: 5 },
  infoValue: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  alertBox: { backgroundColor: '#FFF3E0', borderRadius: 10, padding: 15, borderWidth: 1, borderColor: '#FFB74D', marginTop: 10 },
  alertTitle: { fontSize: 16, fontWeight: 'bold', color: '#E65100', marginBottom: 5 },
  alertMessage: { fontSize: 14, color: '#333' },
});
