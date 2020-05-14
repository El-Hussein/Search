import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { HomeTemplate } from './src/components/templates';


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeTemplate />
    </>
  );
};

export default App;
