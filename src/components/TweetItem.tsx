import * as React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Avatar, Text } from 'react-native-elements';

import { Tweet } from '../interfaces/tweet';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    alignItems: 'stretch',
  },
  leftTop: {
    flex: 3,
  },
  leftBottom: {
    flex: 9,
  },
  right: {
    flex: 7,
  },
  rightHeader: {
    flex: 1,
    flexDirection: 'row',
  },
  rightContent: {
    flex: 10,
  },
  rightFooter: {
    flex: 1,
  },
  username: {
    color: 'grey',
  },
});

interface Props {
  tweet: Tweet,
  style?: ViewStyle,
};

export const TweetItem: React.FunctionComponent<Props> = (props) => {
  const { tweet: { text, username, nickname, profileImageURL } } = props;

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.left}>
        <View style={styles.leftTop}>
          <Avatar
            rounded
            source={{ uri: profileImageURL }}
          />
        </View>
        <View style={styles.leftBottom} />
      </View>
      <View style={styles.right}>
        <View style={styles.rightHeader}>
          <View><Text>{nickname}&nbsp;</Text></View>
          <View><Text style={styles.username}>@{username}</Text></View>
        </View>
        <View style={styles.rightContent}>
          <Text>{text}</Text>
        </View>
        <View style={styles.rightFooter}><Text>Open in Twitter</Text></View>
      </View>
    </View>
  );
}