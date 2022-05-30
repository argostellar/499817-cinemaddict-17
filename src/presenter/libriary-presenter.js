import LibriaryView from '../view/libriary-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import SortView from '../view/sort-view.js';
import ShowMoreBtnView from '../view/show-more-btn-view.js';
import CardView from '../view/card-view.js';
// import FilmDetailsPopupView from '../view/film-details-popup-view.js';
import {render} from '../render.js';

export default class LibriaryPresenter {
  libriaryComponent = new LibriaryView();
  filmsListComponent = new FilmsListView();
  filmsListContainer = new FilmsListContainerView();

  init = (libriaryContainer, filmsModel) => {
    this.libriaryContainer = libriaryContainer;
    this.filmsModel = filmsModel;
    this.libriaryFilms = [...this.filmsModel.getFilms()];
    this.comments = [...this.filmsModel.getComments()]; // это работает?

    render(this.libriaryComponent, this.libriaryContainer);
    render(new SortView(), this.libriaryComponent.getElement());
    render(this.filmsListComponent, this.libriaryComponent.getElement());
    render(this.filmsListContainer, this.filmsListComponent.getElement());
    render(new ShowMoreBtnView(), this.filmsListComponent.getElement());

    for (let i = 0; i < this.libriaryFilms.length; i++) {
      render(new CardView(this.libriaryFilms[i]), this.filmsListContainer.getElement());
    }

    // render(new FilmDetailsPopupView(this.libriaryFilms[0], this.comments), this.libriaryContainer.getElement()); // это точно не работает
  };
}
