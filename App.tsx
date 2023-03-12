
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from "./redux/store";
import { Provider } from 'react-redux';
import RewardsScreen from './container/RewardsScreen';

function App() {
  return (
    <Provider store={store}>
        <SafeAreaProvider>
          <RewardsScreen/>
        </SafeAreaProvider>
    </Provider>
  );
}

export default App;