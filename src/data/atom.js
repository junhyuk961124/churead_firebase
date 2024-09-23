import { atom } from 'recoil';
import { postList } from './response';

export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: 'junhyuk', // default value (aka initial value)
});

export const postListState = atom({
  key: 'postListState', // unique ID (with respect to other atoms/selectors)
  default: postList, // default value (aka initial value)
});
export const chureadState = atom({
  key: 'chureadState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
