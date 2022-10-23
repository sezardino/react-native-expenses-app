import { NativeStackScreenProps } from "@react-navigation/native-stack";

export const enum RootScreens {
  ExpensesOverview = "ExpensesOverview",
  ManageExpenses = "ManageExpenses",
}

export type RootStackParamList = Record<RootScreens, undefined>;

export type ExpensesOverviewProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.ExpensesOverview
>;

export type ManageExpensesProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.ManageExpenses
>;
