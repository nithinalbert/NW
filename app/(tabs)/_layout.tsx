import { COLORS } from '@/constants/themes'
import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'


export default function TabLayout() {
  return (
    <Tabs screenOptions={{
       tabBarShowLabel: false,
       tabBarActiveTintColor: COLORS.primary, 
       tabBarInactiveTintColor: COLORS.grey,
       headerShown: false,
       tabBarStyle: {
        backgroundColor:"black",
        borderTopWidth: 0,
        position: 'absolute',
        elevation: 0,
        height: 40,
        paddingBottom: 10,
       },
    }}>
      
        <Tabs.Screen name="index" options={{
          tabBarIcon: () => <Ionicons name='home' size={20}  />,
        }} />
        <Tabs.Screen name="bookmarks" options={{ 
          tabBarActiveTintColor: "white",
          tabBarIcon: () => <Ionicons name='bookmark' size={20} />, 
        }} />
        <Tabs.Screen name="create" options={{ 
          tabBarIcon: () => <Ionicons name='add-circle' size={20}  />,
        }} />
        <Tabs.Screen name="notification" options={{ 
          tabBarIcon: () => <Ionicons name='notifications' size={20} />,
        }} />
        <Tabs.Screen name="profile" options={{ 
          tabBarIcon: () => <Ionicons name='person' size={20} />, 
        }} />
      
    </Tabs>
  )
}