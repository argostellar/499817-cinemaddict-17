import AbstractView from '../framework/view/abstract-view.js';

const createNoCommentTemplate = () => '<span>No comments</span>';

export default class NoCommentView extends AbstractView {
  get template() {
    return createNoCommentTemplate();
  }
}
