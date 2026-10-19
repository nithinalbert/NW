import { COLORS } from '@/constants/themes'
import { styles } from '@/styles/auth.styles'
import { useSignIn, useSSO } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useEffect, useRef, useState } from 'react'
import { Animated, Text, TouchableOpacity, View } from 'react-native'
import Page from './sign-in'


const images = [
    require('../../assets/images/frnd.png'),
    require('../../assets/images/frnd3.png'),
    require('../../assets/images/frnd4.png'),
];








export default function Login() {
    const { isLoaded, signIn, setActive } = useSignIn();



    const { startSSOFlow } = useSSO()
    const router = useRouter();


    const handleGoogleLogin = async () => {
        try {
            const { createdSessionId, setActive }
            = await startSSOFlow({ strategy: 
            "oauth_google" });

            if (setActive && createdSessionId) {
                setActive({ session: createdSessionId })
                router.replace("/(tabs)");                
            }
        } catch (error) {
            console.error('OAuth error:', error);
        }
        // router.push('/(tabs)')
    };
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const fadeAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const interval = setInterval(() => {
            // Fade out
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start(() => {
                // After fade out, update image
                setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);

                // Fade in
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }).start();
            });
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [fadeAnim]);



    return (
        <View style={styles.container}>

            <View style={styles.brandSection}>
                <View style={styles.logoContainer}>
                    <Ionicons name='leaf' size={32} color={COLORS.primary} />
                </View>
                <Text style={styles.appName}>spotlight</Text>
                <Text style={styles.tagline}>dont't miss anything</Text>
            </View>
            <View>
                <Page/>
            </View>


            <View style={styles.illustrationContainer}>
                {/* <Image source={images[currentImageIndex]}
                   
                    style={styles.illustration}
                    resizeMode='cover'
                /> */}
                
                <Animated.Image
                    source={images[currentImageIndex]}
                    style={[styles.illustration, { opacity: fadeAnim ,height: 400}]}
                    resizeMode="cover"
                />
            </View>

            {/* //LOGIN SECTION// */}
            <View style={styles.loginSection}>
                <View>
                    <TouchableOpacity
                        onPress={handleGoogleLogin}
                        style={styles.googleButton}
                        activeOpacity={0.9}
                    >
                        <View style={styles.googleIconContainer}>
                            <Ionicons name='logo-google' size={20} color={COLORS.surface} />
                        </View>
                        <Text style={styles.googleButtonText}>Continue with Google</Text>
                    </TouchableOpacity>

                    <Text style={styles.termsText}>
                        By continuing, you agree to our Terms and Privacy Policy
                    </Text>
                </View>

            </View>
        </View >
    );
}