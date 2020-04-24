import {createElement} from '../utils.js';

const createSortingTemplate = () => `
  <div class="board__filter-list">
    <a href="#" class="board__filter" data-sort-type="default">SORT BY DEFAULT</a>
    <a href="#" class="board__filter" data-sort-type="date-up">SORT BY DATE up</a>
    <a href="#" class="board__filter" data-sort-type="date-down">SORT BY DATE down</a>
  </div>`;

export default class sorting {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSortingTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
