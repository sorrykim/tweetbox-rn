import { observable, action, computed } from 'mobx';

import { Tweet } from '../models/Tweet';
import ApiService from '../services/ApiService';
import { RootStore } from './RootStore';

export class TweetStore {
  rootStore: RootStore;

  @observable isFetchingTweets = false;
  @observable tweets: Array<Tweet> = [];
  @observable errorFetchingTweets = undefined;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action.bound
  async fetchAll() {
    try {
      this.isFetchingTweets = true;
      this.tweets = await ApiService.fetchTweets();
    } catch (error) {
      this.errorFetchingTweets = error;
      this.tweets = [];
    } finally {
      this.isFetchingTweets = false;
    }
  }

  @computed
  get tweetItems() {
    return this.tweets.map(tweet => { item: tweet });
  }
}
