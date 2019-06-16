export class ApiService {
  baseURL = 'https://my-json-server.typicode.com/steinkim/tweetbox-fake-db';

  async fetchTweets() {
    const response = await fetch(`${this.baseURL}/tweets`);
    return await response.json();
  }
}

export default new ApiService();
