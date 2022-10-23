import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabsScreens, TabsStackParamList } from './types';

import { AllExpenses } from '../../screens/AllExpenses';
import { RecentExpenses } from '../../screens/RecentExpenses';

const Tabs = createBottomTabNavigator<TabsStackParamList>();

export const TabsNavigator = () => {
  return <Tabs.Navigator>
    <Tabs.Screen name={TabsScreens.RecentExpenses} component={RecentExpenses} />
    <Tabs.Screen name={TabsScreens.AllExpenses} component={AllExpenses} />
  </Tabs.Navigator>
}
