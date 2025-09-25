import { Tabs } from 'expo-router';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  // Aesthetic color palettes for light and dark mode
  const aestheticColors = {
    light: {
      background: '#000000ff',          // soft light blue-gray background
      activeTint: '#8bafe9ff',          // vibrant blue for active tab
      inactiveTint: '#64748b',        // muted blue-gray for inactive tabs
      border: '#d1d5db',              // subtle border bottom
      shadow: 'rgba(139, 172, 226, 0.2)', // light blue shadow
    },
    dark: {
      background: '#1d2324ff',          // dark blue-gray background
      activeTint: '#60a5fa',          // lighter blue for active tab
      inactiveTint: '#94a3b8',        // muted light blue for inactive
      border: '#334155',              // darker border bottom
      shadow: 'rgba(96, 165, 250, 0.4)', // subtle glowing shadow
    },
  };

  const themeColors = aestheticColors[colorScheme ?? 'light'];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarActiveTintColor: themeColors.activeTint,
        tabBarInactiveTintColor: themeColors.inactiveTint,
        tabBarPosition: 'top',
        tabBarStyle: {
          backgroundColor: themeColors.background,
          elevation: 8,
          shadowColor: themeColors.shadow,
          shadowOpacity: 0.25,
          shadowOffset: { width: 0, height: 6 },
          shadowRadius: 10,
          borderBottomWidth: 1,
          borderBottomColor: themeColors.border,
          height: 100,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '700',
          letterSpacing: 0.7,
          marginBottom: 6,
          textTransform: 'none',
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
        tabBarItemStyle: {
          borderRadius: 16,
          marginHorizontal: 10,
          paddingVertical: 6,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: 'Order',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
