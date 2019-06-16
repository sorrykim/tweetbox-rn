import { TweetStore } from "./TweetStore";

export class RootStore {
  tweetStore: TweetStore;

  constructor() {
    this.tweetStore = new TweetStore(this);
  }
}
