import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/main/HomeScreen';
import CropRecommendationScreen from '../screens/ai/CropRecommendationScreen';
import DiseaseDetectionScreen from '../screens/ai/DiseaseDetectionScreen';
import ClimateScreen from '../screens/climate/ClimateScreen';
import GovtYojnaScreen from '../screens/main/GovtYojnaScreen';
import SeasonalCropScreen from '../screens/climate/SeasonalCropScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#4CAF50' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
      tabBarActiveTintColor: '#2E7D32',
      tabBarInactiveTintColor: 'gray',
    }}>
      <Tab.Screen name="Dashboard" component={HomeScreen} options={{ title: 'Home', tabBarIcon: () => null }} />
      <Tab.Screen name="Seasons" component={SeasonalCropScreen} options={{ title: 'Seasons', tabBarIcon: () => null }} />
      <Tab.Screen name="Govt Schemes" component={GovtYojnaScreen} options={{ title: 'Benefits', tabBarIcon: () => null }} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Main" screenOptions={{
      headerStyle: { backgroundColor: '#4CAF50' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' }
    }}>
      <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Crop Recommendation" component={CropRecommendationScreen} options={{ title: 'AI Recommendation' }} />
      <Stack.Screen name="Disease Detection" component={DiseaseDetectionScreen} options={{ title: 'AI Health Check' }} />
      <Stack.Screen name="Climate" component={ClimateScreen} options={{ title: 'Live Climate' }} />
    </Stack.Navigator>
  );
}
