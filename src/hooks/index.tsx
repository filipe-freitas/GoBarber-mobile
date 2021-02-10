import React from '../pages/SignIn/node_modules/react';

import { AuthProvider } from './Auth';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
