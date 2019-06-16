import { observable } from 'mobx';

export class Tweet {
  @observable id: number;
  @observable text: string;
  @observable username: string;
  @observable nickname: string;
  @observable profileImageURL?: string;

  constructor(object: any) {
    const { id, text, username, nickname, profileImageURL } = object;
    this.id = id;
    this.text = text;
    this.username = username;
    this.nickname = nickname;
    this.profileImageURL = profileImageURL;
  }
}