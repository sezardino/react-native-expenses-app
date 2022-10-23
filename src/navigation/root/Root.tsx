import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { RootScreens, RootStackParamList } from './types';

import { ManageExpense } from '../../screens/ManageExpense';
import { TabsNavigator } from '../tabs/Tabs';

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={RootScreens.ExpensesOverview} component={TabsNavigator} options={{ headerShown: false }} />
      <Stack.Screen name={RootScreens.ManageExpenses} component={ManageExpense} />
    </Stack.Navigator>
  </NavigationContainer>
}
