import React from 'react';

import Landing from '../pages/Landing';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="landing" component={Landing} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack;
