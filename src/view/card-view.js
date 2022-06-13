import AbstractView from '../framework/view/abstract-view.js';
import {humanizeFilmReleaseDateToYear, humanizeFilmRuntime} from '../utils/film.js';
import {DESCRIPTION_MAX_LENGTH} from '../const.js';

const createCommentsCountTemplate = (commentsId) => `${commentsId.length} comment${commentsId.length !== 1 ? 's' : ''}`;

const trimDescription = (description) => `${description.slice(0, DESCRIPTION_MAX_LENGTH + 3)}...`; // почему + 3 а не просто DESCRIPTION_MAX_LENGTH?

const setCtrlItemStatus = (status) => `${ status ? 'film-card__controls-item--active' : '' }`;

const BLANK_FILM = {
  id: 0,
  commentsId: [0],
  filmInfo: {
    title: 'Placeholder Film',
    alternativeTitle: 'Alternative Placeholder Film',
    totalRating: '0.0',
    poster: 'images/posters/placeholder-film.jpg',
    ageRating: '0',
    director: 'PH Name',
    writers: ['PH Name 1', 'PH Name 2', 'PH Name 3'],
    actors: ['PH Name 1', 'PH Name 2', 'PH Name 3'],
    release: {
      date: '2019-05-11T00:00:00.000Z',
      releaseCountry: 'PH Country',
    },
    runtime: 0,
    genres: ['PH Genre 1', 'PH Genre 2', 'PH Genre 3'],
    description: 'PH description',
  },
  userDetails: {
    watchlist: false,
    alreadyWatched: false,
    watchingDate: '2019-04-12T16:12:32.554Z',
    favorite: false,
  },
};

const createCardTemplate = (film) => {
  const {commentsId, filmInfo, userDetails} = film; // деструктуризация

  const {
    title,
    totalRating,
    poster,
    release,
    runtime,
    genres,
    description
  } = filmInfo;

  const {
    watchlist: isInWatchList,
    alreadyWatched: isAlreadyWatched,
    favorite: isFavorite
  } = userDetails;

  const {date} = release;

  const commentsCountTemplate = createCommentsCountTemplate(commentsId);

  return `<article class="film-card">
          <a class="film-card__link">
            <h3 class="film-card__title">${title}</h3>
            <p class="film-card__rating">${totalRating}</p>
            <p class="film-card__info">
              <span class="film-card__year">${humanizeFilmReleaseDateToYear(date)}</span>
              <span class="film-card__duration">${humanizeFilmRuntime(runtime)}</span>
              <span class="film-card__genre">${genres[0]}</span>
            </p>
            <img src="${poster}" alt="" class="film-card__poster">
            <p class="film-card__description">${description.length > DESCRIPTION_MAX_LENGTH ? trimDescription(description) : description}</p>
            <span class="film-card__comments">${commentsCountTemplate}</span>
          </a>
          <div class="film-card__controls">
            <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${setCtrlItemStatus(isInWatchList)}" type="button">Add to watchlist</button>
            <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${setCtrlItemStatus(isAlreadyWatched)}" type="button">Mark as watched</button>
            <button class="film-card__controls-item film-card__controls-item--favorite ${setCtrlItemStatus(isFavorite)}" type="button">Mark as favorite</button>
          </div>
        </article>`;
};

export default class CardView extends AbstractView {
  #film = null;

  constructor(film = BLANK_FILM) {
    super();
    this.#film = film;
  }

  get template() {
    return createCardTemplate(this.#film);
  }

  setClickHandler = (callback) => {
    this._callback.click = callback;
    this.element.addEventListener('click', this.#clickHandler);
  };

  #clickHandler = (evt) => {
    evt.preventDefault();
    this._callback.click();
  };
}
