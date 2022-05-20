import {createElement} from '../render.js';

const createCardTemplate = () => `<article class="film-card">
          <a class="film-card__link">
            <h3 class="film-card__title">The Man with the Golden Arm</h3>
            <p class="film-card__rating">3.0</p>
            <p class="film-card__info">
              <span class="film-card__year">1925</span>
              <span class="film-card__duration">1h 59m</span>
              <span class="film-card__genre">Drama</span>
            </p>
            <img src="./images/posters/the-man-with-the-golden-arm.jpg" alt="" class="film-card__poster">
            <p class="film-card__description">Curabitur lacinia, lacus a egestas auctor, massa enim commodo elit, neque mauris a nunc. Donec ipsum felis, ve facilisis tortor commodo etc…</p>
            <span class="film-card__comments">22 comments</span>
          </a>
          <div class="film-card__controls">
            <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
            <button class="film-card__controls-item film-card__controls-item--mark-as-watched film-card__controls-item--active" type="button">Mark as watched</button>
            <button class="film-card__controls-item film-card__controls-item--favorite film-card__controls-item--active" type="button">Mark as favorite</button>
          </div>
        </article>`;

export default class CardView {
  getTemplate() {
    return createCardTemplate();
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
