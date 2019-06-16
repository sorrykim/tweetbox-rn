import React from 'react';
import { createAppContainer } from 'react-navigation';

import { AppNavigator } from './navigators/AppNavigator';

const AppContainer = createAppContainer(AppNavigator);

export default () => (
  <AppContainer />
);
