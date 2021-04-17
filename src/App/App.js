import React, { useState, useEffect } from 'react';
import Navigator from './Navigator';
import { View, StatusBar, LogBox } from "react-native";
import { enableScreens } from 'react-native-screens';
enableScreens();
LogBox.ignoreAllLogs();
const App = (props) => {
  return (
    <Navigator />
  )
};
export default App;