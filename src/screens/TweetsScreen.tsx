import * as React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Header, Divider } from 'react-native-elements';

import { TweetItem } from '../components/TweetItem';
import { tweets } from '../../fixtures/tweets';
import { Tweet } from '../interfaces/Tweet';
import { ScreenFunctionComponent } from '../interfaces/screen-function-component';
import { TabIcon } from '../components/TabIcon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  content: {
    flex: 11,
    paddingHorizontal: 10,
  },
  tweetItem: {
    paddingVertical: 10,
  },
  listItem: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

const renderItem = ({ item } : { item: Tweet }) => (
  <View style={styles.listItem}>
    <TweetItem tweet={item} style={styles.tweetItem} />
    <Divider />
  </View>
);

export const TweetsScreen: ScreenFunctionComponent = () => (
  <View style={styles.container}>
    <Header
      containerStyle={styles.header}
      centerComponent={{ text: 'Tweets', style: { color: '#fff' } }}
    />
    <View style={styles.content}>
      <FlatList
        keyExtractor={(item, index) => String(index)}
        data={tweets}
        renderItem={renderItem}
      />
    </View>
  </View>
);

TweetsScreen.navigationOptions = {
  tabBarIcon: ({ focused } : { focused: boolean }) => (
    <TabIcon
      type="material-community"
      name="twitter"
      color="#1a95ec"
      focused={focused}
    />
  ),
}