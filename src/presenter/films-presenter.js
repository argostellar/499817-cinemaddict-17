import FilmsView from '../view/films-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import SortView from '../view/sort-view.js';
import ShowMoreBtnView from '../view/show-more-btn-view.js';
import CardView from '../view/card-view.js';
import {render} from '../render.js';

export default class FilmsPresenter {
  filmsComponent = new FilmsView();
  filmsListComponent = new FilmsListView();
  filmsListContainer = new FilmsListContainerView();

  init = (filmsContainer) => {
    this.filmsContainer = filmsContainer;

    render(this.filmsComponent, this.filmsContainer);
    render(new SortView(), this.filmsComponent.getElement());
    render(this.filmsListComponent, this.filmsComponent.getElement());
    render(this.filmsListContainer, this.filmsListComponent.getElement());
    render(new ShowMoreBtnView(), this.filmsListComponent.getElement());

    for (let i = 0; i < 5; i++) {
      render(new CardView(), this.filmsListContainer.getElement());
    }
  };
}
