import dayjs from 'dayjs';
import {HOUR} from './const.js';

// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomItem = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);
  return array[randomIndex];
};

const getRandomItems = (array = [], count = 3) => {
  const initial = [...array];
  const processed= [];
  for (let i = 0; i < count; i++) {
    const item = initial.splice(getRandomInteger(0, initial.length - 1), 1);
    processed.push(...item);
  }
  return processed;
};

const getRandomBoolean = () => Boolean(getRandomInteger());

const humanizeFilmReleaseDate = (releaseDate) => dayjs(releaseDate).format('DD MMMM YYYY');

const humanizeFilmReleaseDateToYear = (releaseDate) => dayjs(releaseDate).format('YYYY');

const humanizeCommentDate = (commentDate) => dayjs(commentDate).format('DD MMMM YYYY');

const humanizeFilmRuntime = (runtime) => {
  const minutes = runtime % HOUR;
  const hours = (runtime - minutes) / HOUR;
  return `${hours}h ${minutes}min`;
};

const isTaskExpired = (dueDate) => dueDate && dayjs().isAfter(dueDate, 'D');

const isTaskRepeating = (repeating) => Object.values(repeating).some(Boolean);

export {
  getRandomInteger,
  getRandomItem,
  getRandomItems,
  getRandomBoolean,
  humanizeFilmReleaseDate,
  humanizeFilmReleaseDateToYear,
  humanizeFilmRuntime,
  humanizeCommentDate,
  isTaskExpired,
  isTaskRepeating
};
