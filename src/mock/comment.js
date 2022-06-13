import {
  AUTHORS,
  COMMENT_TEXTS,
  EMOTIONS,
} from '../const.js';
import {getRandomInteger, getRandomItem} from '../utils/common.js';

export const generateComment = () => ({
  id: getRandomInteger(0, 100),
  author: getRandomItem(AUTHORS),
  text: getRandomItem(COMMENT_TEXTS),
  date: '2019-05-11T16:12:32.554Z',
  emotion: getRandomItem(EMOTIONS),
});
