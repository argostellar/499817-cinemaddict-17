import {
  ACTORS,
  DIRECTORS,
  WRITERS,
  COUNTRIES,
  TITLES,
  DESCRIPTIONS,
  POSTERS,
  GENRES,
  AGE_RATINGS,
  UPPER_RATING_BORDER,
  UPPER_RUNTIME_BORDER,
  LOWER_RUNTIME_BORDER,
} from '../const.js';
import {getRandomInteger, getRandomItem, getRandomItems} from '../utils.js';

const generateRating = () => {
  const integerPart = getRandomInteger(0, UPPER_RATING_BORDER);
  let fractionalPart = getRandomInteger(0, UPPER_RATING_BORDER - 1);

  if (integerPart === 10) {
    fractionalPart = 0;
  }

  return `${integerPart}.${fractionalPart}`;
};

const generateCommentId = () => getRandomInteger(0, 100);

const generateCommentsId = () => Array.from({length: getRandomInteger(1, 100)}, generateCommentId);

export const generateFilm = () => ({
  id: getRandomInteger(0,100),
  commentsId: generateCommentsId(),
  filmInfo: {
    title: getRandomItem(TITLES),
    alternativeTitle: getRandomItem(TITLES),
    totalRating: generateRating(),
    poster: `images/posters/${getRandomItem(POSTERS)}`,
    ageRating: `${getRandomItem(AGE_RATINGS)}`,
    director: getRandomItem(DIRECTORS),
    writers: [...getRandomItems(WRITERS, getRandomInteger(1, 3))],
    actors: getRandomItems(ACTORS),
    release: {
      date: '2019-05-11T00:00:00.000Z',
      releaseCountry: getRandomItem(COUNTRIES),
    },
    runtime: getRandomInteger(LOWER_RUNTIME_BORDER, UPPER_RUNTIME_BORDER),
    genres: [...getRandomItems(GENRES, getRandomInteger(1, 3))],
    description: getRandomItem(DESCRIPTIONS),
  },
  userDetails: {
    watchlist: !!(getRandomInteger()),
    alreadyWatched: !!(getRandomInteger()),
    watchingDate: '2019-04-12T16:12:32.554Z',
    favorite: !!(getRandomInteger()),
  },
});
