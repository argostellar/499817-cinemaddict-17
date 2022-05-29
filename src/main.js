import FilterView from './view/filter-view.js';
import UserLevelView from './view/user-level-view.js';
import StatisticsView from './view/statistics-view.js';
import {render} from './render.js';
import LibriaryPresenter from './presenter/libriary-presenter.js';
import FilmsModel from './model/films-model.js';

// import FilmDetailsPopupView from './view/film-details-popup-view.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterElement = document.querySelector('.footer');

const filmsModel = new FilmsModel();
const libriaryPresenter = new LibriaryPresenter(siteMainElement, filmsModel);

render(new FilterView(), siteMainElement);
render(new UserLevelView(), siteHeaderElement);
render(new StatisticsView(), siteFooterElement);

// const libriaryFilms = filmsModel.getFilms();
// const libraryComments = filmsModel.getComments();
// render(new FilmDetailsPopupView(libriaryFilms[0], libraryComments), siteMainElement);

libriaryPresenter.init();
