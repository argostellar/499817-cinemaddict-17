import {isAlreadyWatched} from '../utils/film.js';

export const generateUserLevel = (films) => {
  const watchedFilms = films.filter((film) => isAlreadyWatched(film.userDetails));

  return watchedFilms.length;
};
