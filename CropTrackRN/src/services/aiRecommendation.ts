export interface SoilMetrics {
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  temperature: number;
  humidity: number;
  ph: number;
  rainfall: number;
}

/**
 * A local expert system simulating an ML model for Crop Recommendation.
 * Based on agricultural datasets (e.g., Kaggle Crop Recommendation), 
 * it maps specific N,P,K and environmental inputs to the best suitable crop.
 */
export const predictCrop = (metrics: SoilMetrics): string => {
  const { nitrogen: n, phosphorus: p, potassium: k, temperature: t, humidity: h, ph, rainfall: r } = metrics;

  // Rule-based classification mimicking a Decision Tree Classifier
  if (n > 60 && n <= 100 && p > 30 && p <= 60 && k > 30 && k <= 50 && t > 20 && t <= 30 && h > 70 && r > 150) {
    return 'Rice';
  }
  if (n > 80 && p > 30 && k > 30 && t < 25 && r > 50 && r < 100) {
    return 'Maize';
  }
  if (n < 40 && p > 60 && k > 60 && t > 15 && t < 30 && h < 60) {
    return 'Chickpea';
  }
  if (n < 40 && p > 50 && k > 15 && t > 10 && t < 35 && h < 70) {
    return 'Kidney Beans';
  }
  if (n < 30 && p > 40 && k > 15 && t > 15 && t < 35 && h < 80) {
    return 'Moth Beans';
  }
  if (n > 90 && p > 70 && k > 40 && t > 25 && t < 35 && h > 80 && r > 90) {
    return 'Banana';
  }
  if (n < 30 && p > 10 && k > 20 && t > 20 && t < 40 && h > 80 && r > 90) {
    return 'Coconut';
  }
  if (t > 20 && t < 30 && h > 40 && h < 70 && r > 40 && r < 100) {
    return 'Wheat';
  }
  if (n > 100 && t > 20 && t < 35 && r > 40) {
    return 'Cotton';
  }
  if (n < 50 && t > 15 && t < 30 && r > 20 && r < 60) {
    return 'Lentil';
  }
  if (n > 60 && p > 40 && k > 40 && t > 10 && t < 25 && r > 60) {
    return 'Apple';
  }
  if (t > 25 && t < 40 && h > 40 && h < 60 && r > 20 && r < 50) {
    return 'Watermelon';
  }

  // Fallback defaults if out of specific bounds
  if (r > 150) return 'Jute';
  if (t > 30) return 'Mango';
  if (h > 80) return 'Papaya';
  if (n > 80) return 'Coffee';

  // Absolute fallback
  return 'Wheat / General Crop';
};
