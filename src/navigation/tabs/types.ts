import { NativeStackScreenProps } from "@react-navigation/native-stack";

export const enum TabsScreens {
  RecentExpenses = "RecentExpenses",
  AllExpenses = "AllExpenses",
}

export type TabsStackParamList = Record<TabsScreens, undefined>;

export type RecentExpensesProps = NativeStackScreenProps<
  TabsStackParamList,
  TabsScreens.RecentExpenses
>;

export type AllExpensesProps = NativeStackScreenProps<
  TabsStackParamList,
  TabsScreens.AllExpenses
>;
