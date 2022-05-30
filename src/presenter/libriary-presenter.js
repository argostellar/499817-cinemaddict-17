import LibriaryView from '../view/libriary-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import SortView from '../view/sort-view.js';
import ShowMoreBtnView from '../view/show-more-btn-view.js';
import CardView from '../view/card-view.js';
import CardPopupView from '../view/card-popup-view.js';
import {render} from '../render.js';

export default class LibriaryPresenter {
  #libriaryContainer = null;
  #filmsModel = null;

  #libriaryComponent = new LibriaryView();
  #filmsListComponent = new FilmsListView();
  #filmsListContainer = new FilmsListContainerView();

  #libriaryFilms = [];
  #comments = [];

  init = (libriaryContainer, filmsModel) => {
    this.#libriaryContainer = libriaryContainer;
    this.#filmsModel = filmsModel;
    this.#libriaryFilms = [...this.#filmsModel.films];
    this.#comments = [...this.#filmsModel.comments];

    render(this.#libriaryComponent, this.#libriaryContainer);
    render(new SortView(), this.#libriaryComponent.element);
    render(this.#filmsListComponent, this.#libriaryComponent.element);
    render(this.#filmsListContainer, this.#filmsListComponent.element);
    render(new ShowMoreBtnView(), this.#filmsListComponent.element);

    for (let i = 0; i < this.#libriaryFilms.length; i++) {
      // console.log(this.#libriaryFilms[0]);
      this.#renderCard(this.#libriaryFilms[i], this.#comments);
    }

    // render(new FilmDetailsPopupView(this.libriaryFilms[0], this.comments), this.libriaryContainer.getElement()); // это точно не работает
  };

  #renderCard = (film, comments) => {
    const cardComponent = new CardView(film);
    // this.cardPopupComponent = null;

    // let isPopupShown = null;

    const hideCardPopup = () => {
      // console.log(this.cardPopupComponent.element);\
      // document.body.removeChild(cardPopupComponent.element);
      const currentElement = document.body.querySelector('.film-details');
      document.body.removeChild(currentElement);
      document.body.classList.remove('hide-overflow');
      // document.body.querySelector('.film-details').remove();
      // isPopupShown = false;
      // console.log(`isPopupShown: ${isPopupShown}`);
      // this.cardPopupComponent.removeElement();
    };

    const showCardPopup = () => {
      const cardPopupComponent = new CardPopupView(film, comments);
      document.body.appendChild(cardPopupComponent.element);
      document.body.classList.add('hide-overflow');
      // isPopupShown = true;
      // console.log(isPopupShown);
      cardPopupComponent.element.querySelector('.film-details__close-btn').addEventListener('click', () => {
        hideCardPopup();
      });
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        hideCardPopup();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    cardComponent.element.querySelector('.film-card__link').addEventListener('click', () => {
      // if (!evt.target.classList.contains('film-card__controls-item')) {
      //   // if (this.cardPopupComponent || isPopupShown) {
      //   //   hideCardPopup();
      //   // }
      //   // console.log(`isPopupShown: ${isPopupShown}`);
      //   showCardPopup();
      //   document.addEventListener('keydown', onEscKeyDown);
      // }
      showCardPopup();
      document.addEventListener('keydown', onEscKeyDown);
    });

    render(cardComponent, this.#filmsListContainer.element);
  };
}
