import * as React from 'react';
import { createBottomTabNavigator, NavigationContainer } from "react-navigation";
import { Icon } from 'react-native-elements'

import { HelpScreen } from "../screens/HelpScreen";
import { TweetsScreen } from "../screens/TweetsScreen";

export const AppNavigator: NavigationContainer = createBottomTabNavigator({
  Tweets: TweetsScreen,
  Help: HelpScreen,
});