import dayjs from 'dayjs';
import {HOUR} from '../const.js';

const humanizeFilmReleaseDate = (releaseDate) => dayjs(releaseDate).format('DD MMMM YYYY');

const humanizeFilmReleaseDateToYear = (releaseDate) => dayjs(releaseDate).format('YYYY');

const humanizeCommentDate = (commentDate) => dayjs(commentDate).format('DD MMMM YYYY');

const humanizeFilmRuntime = (runtime) => {
  const minutes = runtime % HOUR;
  const hours = (runtime - minutes) / HOUR;
  return `${hours}h ${minutes}min`;
};

const isInWatchlist = (userDetails) => userDetails.watchlist;
const isAlreadyWatched = (userDetails) => userDetails.alreadyWatched;
const isInFavorite = (userDetails) => userDetails.favorite;

export {
  humanizeFilmReleaseDate,
  humanizeFilmReleaseDateToYear,
  humanizeFilmRuntime,
  humanizeCommentDate,
  isInWatchlist,
  isAlreadyWatched,
  isInFavorite,
};
