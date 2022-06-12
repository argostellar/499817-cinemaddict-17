import {FilterType} from '../const';
import {isInWatchlist, isAlreadyWatched, isInFavorite} from './film.js';

const filter = {
  // [FilterType.ALL]: (films) => films.filter((film) => film !== null),
  [FilterType.WATCHLIST]: (films) => films.filter((film) => isInWatchlist(film.userDetails)),
  [FilterType.HISTORY]: (films) => films.filter((film) => isAlreadyWatched(film.userDetails)),
  [FilterType.FAVORITES]: (films) => films.filter((film) => isInFavorite(film.userDetails)),
};

export {filter};


