import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabsScreens, TabsStackParamList } from './types';

import { Styles } from '../../const';
import { AllExpenses } from '../../screens/AllExpenses';
import { RecentExpenses } from '../../screens/RecentExpenses';

const Tabs = createBottomTabNavigator<TabsStackParamList>();

export const TabsNavigator = () => {
  return <Tabs.Navigator screenOptions={{
    headerStyle: { backgroundColor: Styles.colors.primary500 },
    headerTintColor: Styles.colors.white,
    tabBarStyle: { backgroundColor: Styles.colors.primary500 },
    tabBarActiveTintColor: Styles.colors.accent500
  }}>
    <Tabs.Screen name={TabsScreens.RecentExpenses} component={RecentExpenses}
      options={{
        title: "Recent Expenses",
        tabBarLabel: "Recent",
        tabBarIcon: ({ size, color }) => <Ionicons name="hourglass" size={size} color={color} />
      }} />
    <Tabs.Screen name={TabsScreens.AllExpenses} component={AllExpenses}
      options={{
        title: "All Expenses",
        tabBarLabel: "All Expenses",
        tabBarIcon: ({ size, color }) => <Ionicons name="calendar" size={size} color={color} />
      }} />
  </Tabs.Navigator>
}
