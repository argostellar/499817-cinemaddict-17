import {createElement} from '../render.js';

const createLibriaryTemplate = () => '<section class="films"></section>';

export default class LibriaryView {
  #element = null;

  get template() {
    return createLibriaryTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
