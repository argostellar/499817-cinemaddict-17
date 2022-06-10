import AbstractView from '../framework/view/abstract-view.js';

const createLibriaryTemplate = () => '<section class="films"></section>';

export default class LibriaryView extends AbstractView {
  get template() {
    return createLibriaryTemplate();
  }
}
