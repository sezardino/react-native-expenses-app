import { StatusBar } from 'expo-status-bar';

import { RootNavigator } from './src/navigation';

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <RootNavigator />
    </>
  );
}
