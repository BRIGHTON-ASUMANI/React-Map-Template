import React from 'react';
import './App.css';
import HomeLayout from './components/layout';
import { AppProvider } from './context/appContext';

const App = () => (
  <AppProvider
    value={{
      notificationsLength: 2,
    }}
  >
    <HomeLayout />
  </AppProvider>
);

export default App;
