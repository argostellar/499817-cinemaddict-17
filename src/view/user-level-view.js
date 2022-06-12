import AbstractView from '../framework/view/abstract-view.js';
import {defineUserLevel} from '../utils/user-level.js';

const createUserLevelTemplate = (watchedFilms) => {
  let template = '';
  if (watchedFilms > 0) {
    template = `<p class="profile__rating">${defineUserLevel(watchedFilms)}</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">`;
  }

  return (
    `<section class="header__profile profile">
    ${template}
  </section>`
  );
};

export default class UserLevelView extends AbstractView {
  #watchedFilms = null;

  constructor(watchedFilms) {
    super();
    this.#watchedFilms = watchedFilms;
  }

  get template() {
    return createUserLevelTemplate(this.#watchedFilms);
  }
}
