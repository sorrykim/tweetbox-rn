import * as React from 'react';
import { createBottomTabNavigator, NavigationContainer } from "react-navigation";

import { HelpScreen } from "../screens/HelpScreen";
import { TweetsScreen } from "../screens/TweetsScreen";
import { TabIcon } from '../components/TabIcon';

export interface TabIconProps {
  focused: boolean,
};

export const AppNavigator: NavigationContainer = createBottomTabNavigator({
  Tweets: {
    screen: TweetsScreen,
    navigationOptions: {
      tabBarIcon: ({ focused }: TabIconProps) => (
        <TabIcon
          type="material-community"
          name="twitter"
          color="#1a95ec"
          focused={focused}
        />
      ),
    },
  },
  Help: {
    screen: HelpScreen,
    navigationOptions: {
      tabBarIcon: ({ focused } : TabIconProps) => (
        <TabIcon
          name="help"
          color="#1a95ec"
          focused={focused}
        />
      ),
    },
  },
});