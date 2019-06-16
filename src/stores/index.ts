import React from 'react';
import { RootStore } from './RootStore';

const StoreContext = React.createContext<RootStore>(new RootStore());

export const useStore = () => {
  const store = React.useContext(StoreContext)
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('You have forgot to use StoreProvider, shame on you.')
  }
  return store;
};
