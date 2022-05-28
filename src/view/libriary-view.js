import {createElement} from '../render.js';

const createLibriaryTemplate = () => '<section class="films"></section>';

export default class LibriaryView {
  getTemplate() {
    return createLibriaryTemplate();
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
