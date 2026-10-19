import { tokenCache } from '@/cache';
import { ClerkLoaded, ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { ConvexReactClient } from 'convex/react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';


// const convex = new ConvexReactClient(process.meta.env.VITE_CONVEX_URL as string);
const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

const publishableKey =process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;


if (!publishableKey) {
  throw new Error("Missing _PUBLISHABLE_KEY. Please set the EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY environment variable.");

}


export default function ClerkAndConvexProviders({children}: {children: React.ReactNode}) {
  return (

    <ClerkProvider tokenCache= { tokenCache } publishableKey = { publishableKey } >
      <ConvexProviderWithClerk client={convex} useAuth={() => useAuth()}>
        <ClerkLoaded>
          {children}
        </ClerkLoaded>

      </ConvexProviderWithClerk>


    </ClerkProvider>


    
  )
}