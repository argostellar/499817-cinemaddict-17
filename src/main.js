import FilterView from './view/filter-view.js';
import UserLevelView from './view/user-level-view.js';
import StatisticsView from './view/statistics-view.js';
import {render} from './render.js';
import FilmsPresenter from './presenter/films-presenter.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterElement = document.querySelector('.footer');
const filmsPresenter = new FilmsPresenter();

render(new FilterView(), siteMainElement);
render(new UserLevelView(), siteHeaderElement);
render(new StatisticsView(), siteFooterElement);

filmsPresenter.init(siteMainElement);
