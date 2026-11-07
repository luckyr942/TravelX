import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { predictCrop, SoilMetrics } from '../../services/aiRecommendation';

export default function CropRecommendationScreen() {
  const [metrics, setMetrics] = useState<Partial<SoilMetrics>>({});
  const [prediction, setPrediction] = useState<string | null>(null);

  const handlePredict = () => {
    if (!metrics.nitrogen || !metrics.phosphorus || !metrics.potassium || !metrics.temperature || !metrics.humidity || !metrics.ph || !metrics.rainfall) {
      Alert.alert('Validation Error', 'Please fill in all soil metrics parameters.');
      return;
    }
    const crop = predictCrop(metrics as SoilMetrics);
    setPrediction(crop);
  };

  const handleChange = (field: keyof SoilMetrics, value: string) => {
    const num = parseFloat(value);
    setMetrics(prev => ({ ...prev, [field]: isNaN(num) ? undefined : num }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>AI Crop Recommendation</Text>
      <Text style={styles.subtitle}>Enter the soil and environmental data to get the best crop prediction for your farm.</Text>
      
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nitrogen (N) - Ratio in Soil</Text>
        <TextInput style={styles.input} keyboardType="numeric" placeholder="e.g. 90" onChangeText={v => handleChange('nitrogen', v)} />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Phosphorus (P) - Ratio in Soil</Text>
        <TextInput style={styles.input} keyboardType="numeric" placeholder="e.g. 42" onChangeText={v => handleChange('phosphorus', v)} />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Potassium (K) - Ratio in Soil</Text>
        <TextInput style={styles.input} keyboardType="numeric" placeholder="e.g. 43" onChangeText={v => handleChange('potassium', v)} />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Temperature (°C)</Text>
        <TextInput style={styles.input} keyboardType="numeric" placeholder="e.g. 21.0" onChangeText={v => handleChange('temperature', v)} />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Humidity (%)</Text>
        <TextInput style={styles.input} keyboardType="numeric" placeholder="e.g. 82.0" onChangeText={v => handleChange('humidity', v)} />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>pH Value of Soil</Text>
        <TextInput style={styles.input} keyboardType="numeric" placeholder="e.g. 6.5" onChangeText={v => handleChange('ph', v)} />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Rainfall (mm)</Text>
        <TextInput style={styles.input} keyboardType="numeric" placeholder="e.g. 202.9" onChangeText={v => handleChange('rainfall', v)} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Analyze & Predict" onPress={handlePredict} color="#4CAF50" />
      </View>

      {prediction && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Recommended Crop:</Text>
          <Text style={styles.resultValue}>{prediction}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f9f9f9', flexGrow: 1 },
  header: { fontSize: 24, fontWeight: 'bold', color: '#2E7D32', marginBottom: 10, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#555', marginBottom: 20, textAlign: 'center' },
  inputGroup: { marginBottom: 15 },
  label: { fontSize: 14, color: '#333', marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, backgroundColor: '#fff' },
  buttonContainer: { marginTop: 20, marginBottom: 20 },
  resultContainer: { backgroundColor: '#E8F5E9', padding: 20, borderRadius: 10, alignItems: 'center', borderColor: '#4CAF50', borderWidth: 1 },
  resultLabel: { fontSize: 16, color: '#2E7D32', marginBottom: 5 },
  resultValue: { fontSize: 28, fontWeight: 'bold', color: '#1B5E20' },
});
