import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Divider } from 'react-native-elements';
import { observer } from 'mobx-react-lite';
import { NavigationScreenProps, NavigationScreenComponent } from 'react-navigation'
import { FlatList } from 'react-native-gesture-handler';

import { TweetView } from '../components/TweetView';
import { Tweet } from '../models/Tweet';
import { TabIcon } from '../components/TabIcon';
import { TweetStore } from '../stores/TweetStore';
import { useStore } from '../stores';

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

const renderItem = ({ item } : { item: Tweet }) => {
  return (
    <View style={styles.listItem}>
      <TweetView tweet={item} style={styles.tweetItem} />
      <Divider />
    </View>
  );
};

interface Props extends NavigationScreenProps {
  tweetStore: TweetStore,
};

export const TweetsScreen: NavigationScreenComponent<Props> = observer(() => {
  const { tweetStore } = useStore();

  useEffect(() => {
    tweetStore.fetchAll();
  }, []);

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.header}
        centerComponent={{ text: 'Tweets', style: { color: '#fff' } }}
      />
      <View style={styles.content}>
        <FlatList
          keyExtractor={(item, index) => String(index)}
          data={tweetStore.tweets}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
});

TweetsScreen.navigationOptions = {
  tabBarIcon: ({ focused } : { focused: boolean }) => (
    <TabIcon
      type="material-community"
      name="twitter"
      color="#1a95ec"
      focused={focused}
    />
  ),
};
