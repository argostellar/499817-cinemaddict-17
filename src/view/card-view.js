import {createElement} from '../render.js';
import {humanizeFilmReleaseDateToYear, humanizeFilmRuntime} from '../utils.js';
import {DESCRIPTION_MAX_LENGTH} from '../const.js';

const createCommentsCountTemplate = (commentsId) => `${commentsId.length} comment${commentsId.length !== 1 ? 's' : ''}`;

const trimDescription = (description) => `${description.slice(0, DESCRIPTION_MAX_LENGTH + 3)}...`; // почему + 3 а не просто DESCRIPTION_MAX_LENGTH?

const setCtrlItemStatus = (status) => `${ status ? 'film-card__controls-item--active' : '' }`;

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

export default class CardView {
  constructor(film) {
    this.film = film;
  }

  getTemplate() {
    return createCardTemplate(this.film);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
