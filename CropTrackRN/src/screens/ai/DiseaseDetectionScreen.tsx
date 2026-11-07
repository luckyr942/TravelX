import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function DiseaseDetectionScreen() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') return alert('Sorry, we need camera permissions to make this work!');
    
    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });
    
    if (!pickerResult.canceled) {
      setImageUri(pickerResult.assets[0].uri);
      analyzeImage();
    }
  };

  const pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    if (!pickerResult.canceled) {
      setImageUri(pickerResult.assets[0].uri);
      analyzeImage();
    }
  };

  const analyzeImage = () => {
    setLoading(true);
    setResult(null);
    // Simulate AI Image Processing delay
    setTimeout(() => {
      setLoading(false);
      // Mock logic: randomly pick a crop disease or state 'Healthy'
      const diseases = [
        'Healthy Crop 🌿 (No action needed)',
        'Tomato Early Blight 🍂 (Apply Fungicide)',
        'Wheat Rust 🍄 (Needs immediate treatment)',
        'Corn Leaf Blight 🩹 (Ensure proper drainage)',
        'Rice Brown Spot 🦠 (Check soil nutrient levels)',
        'Healthy Crop 🌿 (No action needed)',
        'Healthy Crop 🌿 (No action needed)'
      ];
      setResult(diseases[Math.floor(Math.random() * diseases.length)]);
    }, 2500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Crop Disease Detection</Text>
      <Text style={styles.subtitle}>Upload or take a picture of a crop leaf to analyze its health instantly.</Text>

      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.preview} />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>📸 No Image Selected</Text>
        </View>
      )}

      {loading && <ActivityIndicator size="large" color="#4CAF50" style={{ marginVertical: 20 }} />}
      
      {result && !loading && (
        <View style={[styles.resultBox, result.includes('Healthy') ? styles.healthy : styles.unhealthy]}>
          <Text style={styles.resultLabel}>Analysis Result:</Text>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      )}

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={takePhoto}>
          <Text style={styles.buttonText}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.outlineButton]} onPress={pickImage}>
          <Text style={[styles.buttonText, styles.outlineButtonText]}>Upload from Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1B5E20', marginBottom: 10, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#555', textAlign: 'center', marginBottom: 30 },
  preview: { width: 300, height: 225, borderRadius: 10, marginBottom: 20 },
  placeholder: { width: 300, height: 225, borderRadius: 10, backgroundColor: '#e0e0e0', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  placeholderText: { color: '#888', fontSize: 16 },
  resultBox: { padding: 20, borderRadius: 10, borderWidth: 1, width: '100%', alignItems: 'center', marginBottom: 20 },
  healthy: { backgroundColor: '#E8F5E9', borderColor: '#4CAF50' },
  unhealthy: { backgroundColor: '#FFEBEE', borderColor: '#F44336' },
  resultLabel: { fontSize: 14, marginBottom: 5, color: '#333' },
  resultText: { fontSize: 18, fontWeight: 'bold', color: '#000', textAlign: 'center' },
  buttons: { flexDirection: 'row', gap: 10 },
  button: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 8, flex: 1, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  outlineButton: { backgroundColor: 'transparent', borderWidth: 2, borderColor: '#4CAF50' },
  outlineButtonText: { color: '#4CAF50' }
});
