import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function GovtYojnaScreen() {
  const schemes = [
    {
      id: 1,
      title: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
      desc: 'Financial benefit of ₹6,000 per year provided to all landholding farmers.',
      link: 'https://pmkisan.gov.in/'
    },
    {
      id: 2,
      title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
      desc: 'Crop insurance scheme providing financial support in case of crop failure due to natural calamities.',
      link: 'https://pmfby.gov.in/'
    },
    {
      id: 3,
      title: 'Soil Health Card Scheme',
      desc: 'Provides farmers with soil nutrient status and recommendations for fertilizer dosage to improve crop yields.',
      link: 'https://soilhealth.dac.gov.in/'
    },
    {
      id: 4,
      title: 'Kisan Credit Card (KCC)',
      desc: 'Provides affordable credit for farmers for their cultivation and other needs.',
      link: 'https://pmkisan.gov.in/'
    }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Government Schemes</Text>
      <Text style={styles.subtitle}>Discover benefits and subsidies available for farmers.</Text>
      
      {schemes.map(scheme => (
        <View key={scheme.id} style={styles.card}>
          <Text style={styles.cardTitle}>{scheme.title}</Text>
          <Text style={styles.cardDesc}>{scheme.desc}</Text>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => alert(`In a real app, this would open: ${scheme.link}`)}
          >
            <Text style={styles.buttonText}>Learn More / Apply</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { fontSize: 24, fontWeight: 'bold', color: '#1B5E20', marginBottom: 5, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#555', marginBottom: 20, textAlign: 'center' },
  card: { backgroundColor: 'white', padding: 20, borderRadius: 10, marginBottom: 15, elevation: 3, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#2E7D32', marginBottom: 8 },
  cardDesc: { fontSize: 14, color: '#444', marginBottom: 15, lineHeight: 20 },
  button: { backgroundColor: '#4CAF50', padding: 10, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold' }
});
