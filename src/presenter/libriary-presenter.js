import LibriaryView from '../view/libriary-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import SortView from '../view/sort-view.js';
import ShowMoreBtnView from '../view/show-more-btn-view.js';
import CardView from '../view/card-view.js';
import CardPopupView from '../view/card-popup-view.js';
import NoCardView from '../view/no-card-view.js';
import {render, RenderPosition} from '../render.js';

const CARDS_COUNT_PER_STEP = 5;

export default class LibriaryPresenter {
  #libriaryContainer = null;
  #filmsModel = null;
  #filmPopup = null;
  #isEcsListenerSet = null;

  #listenerCounter = null;

  #libriaryComponent = new LibriaryView();
  #filmsListComponent = new FilmsListView();
  #filmsListContainer = new FilmsListContainerView();
  #showMoreBtnComponent = new ShowMoreBtnView();

  #libriaryFilms = [];
  #comments = [];
  #renderedCardsCount = CARDS_COUNT_PER_STEP;

  constructor(libriaryContainer, filmsModel) {
    this.#libriaryContainer = libriaryContainer;
    this.#filmsModel = filmsModel;
  }

  init = () => {
    this.#libriaryFilms = [...this.#filmsModel.films];
    this.#comments = [...this.#filmsModel.comments];

    this.#renderLibriary();
  };

  #handleShowMoreBtnClick = (evt) => {
    evt.preventDefault();
    this.#libriaryFilms
      .slice(this.#renderedCardsCount, this.#renderedCardsCount + CARDS_COUNT_PER_STEP)
      .forEach((film) => this.#renderCard(film, this.#comments));

    this.#renderedCardsCount += CARDS_COUNT_PER_STEP;

    if (this.#renderedCardsCount >= this.#libriaryFilms.length) {
      this.#showMoreBtnComponent.element.remove();
      this.#showMoreBtnComponent.removeElement();
    }
  };

  #renderCard = (film, comments) => {
    const cardComponent = new CardView(film);

    const hideCardPopup = () => {
      const currentElement = document.body.querySelector('.film-details');

      document.body.removeChild(currentElement);
      document.body.classList.remove('hide-overflow');

      // document.removeEventListener('keydown', onEscKeyDown);

      this.#filmPopup = false;
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        hideCardPopup();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    const showCardPopup = () => {
      const cardPopupComponent = new CardPopupView(film, comments);
      document.body.appendChild(cardPopupComponent.element);
      document.body.classList.add('hide-overflow');

      // document.addEventListener('keydown', onEscKeyDown);

      this.#filmPopup = true;

      cardPopupComponent.element.querySelector('.film-details__close-btn').addEventListener('click', () => {
        hideCardPopup();
        document.removeEventListener('keydown', onEscKeyDown);
      });
    };

    cardComponent.element.querySelector('.film-card__link').addEventListener('click', () => {
      if (this.#filmPopup) {
        hideCardPopup();
        document.removeEventListener('keydown', onEscKeyDown);
      }
      showCardPopup();
      document.addEventListener('keydown', onEscKeyDown);
    });

    render(cardComponent, this.#filmsListContainer.element);
  };

  #renderLibriary() {
    render(this.#libriaryComponent, this.#libriaryContainer);
    render(this.#filmsListComponent, this.#libriaryComponent.element);

    if (this.#libriaryFilms.length === 0) {
      render(new NoCardView(), this.#filmsListComponent.element);
    } else {
      render(new SortView(), this.#libriaryComponent.element, RenderPosition.BEFOREBEGIN);
      render(this.#filmsListContainer, this.#filmsListComponent.element);

      if (this.#libriaryFilms.length > CARDS_COUNT_PER_STEP) {
        render(this.#showMoreBtnComponent, this.#filmsListComponent.element);

        this.#showMoreBtnComponent.element.addEventListener('click', this.#handleShowMoreBtnClick);
      }

      for (let i = 0; i < Math.min(this.#libriaryFilms.length, CARDS_COUNT_PER_STEP); i++) {
        this.#renderCard(this.#libriaryFilms[i], this.#comments);
      }
    }
  }
}
