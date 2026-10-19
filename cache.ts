// import * as SecureStore from 'expo-secure-store';
// import { Platform } from 'react-native';
// import { TokenCache } from '@clerk/clerk-expo/dist/cache';



// // import * as SecureStore from 'expo-secure-store';

// // const TokenCache = {
// //   async getToken(key: string) {
// //     return SecureStore.getItemAsync(key);
// //   },
// //   async saveToken(key: string, value: string) {
// //     return SecureStore.setItemAsync(key, value);
// //   }
// // };

// const createTokenCache = (): TokenCache => {
//   return {
//     getToken: async (key: string) => {
//       try {
//         const item = await SecureStore.getItemAsync(key);
//         if (item) {
//           console.log(`${key} was used 🔐 \n`);
//         } else {
//           console.log('No values stored under key: ' + key);
//         }
//         return item;
//       } catch (error) {
//         console.error('secure store get item error: ', error);
//         await SecureStore.deleteItemAsync(key);
//         return null;
//       }
//     },
//     saveToken: (key: string, token: string) => {
//       return SecureStore.setItemAsync(key, token);
//     },
//   };
// };

// // SecureStore is not supported on the web
// export const tokenCache =
//   Platform.OS !== 'web' ? createTokenCache() : undefined;

import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

type TokenCache = {
  getToken: (key: string) => Promise<string | null>;
  saveToken: (key: string, value: string) => Promise<void>;
};

const createTokenCache = (): TokenCache => {
  return {
    getToken: async (key: string) => {
      try {
        const item = await SecureStore.getItemAsync(key);
        if (item) {
          console.log(`${key} was used 🔐\n`);
        } else {
          console.log('No values stored under key: ' + key);
        }
        return item;
      } catch (error) {
        console.error('secure store get item error: ', error);
        await SecureStore.deleteItemAsync(key);
        return null;
      }
    },
    saveToken: async (key: string, value: string) => {
      await SecureStore.setItemAsync(key, value);
    },
  };
};

export const tokenCache = Platform.OS !== 'web' ? createTokenCache() : undefined;
