import {createElement} from '../render.js';

const createNoCommentTemplate = () => '<span>No comments</span>';

export default class NoCommentView {
  #element = null;

  get template() {
    return createNoCommentTemplate();
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
