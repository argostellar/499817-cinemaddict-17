import FilterView from './view/filter-view.js';
import UserLevelView from './view/user-level-view.js';
import StatisticsView from './view/statistics-view.js';
import {render} from './framework/render.js';
import LibriaryPresenter from './presenter/libriary-presenter.js';
import FilmsModel from './model/films-model.js';
import {generateFilter} from './mock/filter.js';
import {generateUserLevel} from './mock/user-level.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterElement = document.querySelector('.footer');

const filmsModel = new FilmsModel();
const libriaryPresenter = new LibriaryPresenter(siteMainElement, filmsModel);

const filters = generateFilter(filmsModel.films);
const statistics = filmsModel.films.length;
const watchedFilms = generateUserLevel(filmsModel.films);

render(new FilterView(filters), siteMainElement);
render(new UserLevelView(watchedFilms), siteHeaderElement);
render(new StatisticsView(statistics), siteFooterElement);

libriaryPresenter.init(siteMainElement, filmsModel);

// current task: module4-task2
