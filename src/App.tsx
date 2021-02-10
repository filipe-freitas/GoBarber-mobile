import 'react-native-gesture-handler';

import React from './pages/SignIn/node_modules/react';
import { View, StatusBar } from './pages/SignIn/node_modules/react-native';

import { NavigationContainer } from './pages/SignIn/node_modules/@react-navigation/native';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: '#312e38' }}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;
