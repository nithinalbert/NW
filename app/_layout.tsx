// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return <Stack />;
// }
import InitialLayout from "@/component/initialLayout";
import ClerkAndConvexProviders from '@/providers/ClerkAndConvexProviders';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
//temporary


export default function RootLayout() {
  return (

    <ClerkAndConvexProviders>

      <StatusBar hidden={true} />

      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
          <InitialLayout />
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerkAndConvexProviders>
  );

}
