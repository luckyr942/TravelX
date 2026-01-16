// import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import React, { useRef, useState } from 'react';
// import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { onboardingData } from '../constants/onboardingData';

// const { width, height } = Dimensions.get("window");

// export default function IndexOnboarding() {
//     const flatListRef = useRef(null);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const router = useRouter();

//     const handleNext = () => {
//         if (currentIndex < onboardingData.length - 1) {
//             flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
//         } else {
//             router.replace('/(auth)/login');
//         }
//     };

//     const onScroll = (event) => {
//         const index = Math.round(event.nativeEvent.contentOffset.x / width);
//         setCurrentIndex(index);
//     };

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 ref={flatListRef}
//                 data={onboardingData}
//                 horizontal
//                 pagingEnabled
//                 showsHorizontalScrollIndicator={false}
//                 onMomentumScrollEnd={onScroll}
//                 keyExtractor={(item) => item.id}
//                 renderItem={({ item }) => (
//                     <View style={styles.slide}>
//                         {/* Background image */}
//                         <Image 
//                             source={item.image} 
//                             style={styles.backgroundImage} 
//                             resizeMode='cover' 
//                         />

//                         {/* Dark Overlay for text readability */}
//                         <View style={styles.overlay} />

//                         {/* Content Container (Text + Footer) */}
//                         <View style={styles.textContainer}>
//                             <Text style={styles.title}>{item.title}</Text>
//                             <Text style={styles.subtitle}>{item.subtitle}</Text>

//                             {/* Footer AREA: DOTS + ARROWS */}
//                             <View style={styles.footer}>
//                                 <View style={styles.dotContainer}>
//                                     {onboardingData.map((_, index) => (
//                                         <View
//                                             key={index}
//                                             style={[
//                                                 styles.dot,
//                                                 { 
//                                                     width: index === currentIndex ? 20 : 8, 
//                                                     opacity: index === currentIndex ? 1 : 0.4 
//                                                 }
//                                             ]}
//                                         />
//                                     ))}
//                                 </View>

//                                 <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
//                                     <Ionicons name="arrow-forward" size={24} color="black" />
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </View>
//                 )}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: { 
//         flex: 1 
//     },
//     slide: { 
//         width: width, 
//         height: height 
//     },
//     backgroundImage: {
//         ...StyleSheet.absoluteFillObject,
//         width: width,
//         height: height,
//     },
//     overlay: {
//         ...StyleSheet.absoluteFillObject,
//         backgroundColor: 'rgba(0,0,0,0.3)', 
//     },
//     textContainer: {
//         position: 'absolute',
//         bottom: 60,
//         left: 0,
//         right: 0,
//         paddingHorizontal: 30,
//     },
//     title: {
//         color: '#FFFFFF',
//         fontSize: 44,
//         fontWeight: '800',
//         lineHeight: 52,
//         marginBottom: 15,
//     },
//     subtitle: {
//         color: 'rgba(255,255,255,0.8)',
//         fontSize: 16,
//         lineHeight: 24,
//         marginBottom: 40,
//         maxWidth: '90%',
//     },
//     footer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     dotContainer: { 
//         flexDirection: 'row', 
//         alignItems: 'center' 
//     },
//     dot: {
//         height: 4,
//         borderRadius: 2,
//         backgroundColor: '#FFFFFF',
//         marginRight: 6,
//     },
//     nextButton: {
//         width: 56,
//         height: 56,
//         borderRadius: 28,
//         backgroundColor: '#FFFFFF',
//         justifyContent: 'center',
//         alignItems: 'center',
//         elevation: 5,
//     },
// });


import { Redirect } from 'expo-router';

// This is the first thing that runs when the app starts
export default function Index() {
  // It instantly redirects to the (tabs) group
  return <Redirect href="/(tabs)" />;
}