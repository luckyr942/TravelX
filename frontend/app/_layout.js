// import { Stack } from 'expo-router';

// export default function RootLayout(){
//   return(
//     <Stack screenOptions={{headerShown: false}}>
//       <Stack.Screen name = "index"/>
//       <Stack.Screen name = "(auth)"/>
//       <Stack.Screen name = "(tabs)"/>
//     </Stack>
//   )
// }


import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Name must match your folder name (tabs) */}
      <Stack.Screen name="/(tabs)" />
      {/* This helps catch the 'id' page when you click a card */}
      <Stack.Screen name="place/[id]" /> 
    </Stack>
  );
}