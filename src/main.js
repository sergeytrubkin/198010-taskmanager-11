import BoardComponent from './components/board.js';
import FilterComponent from './components/filter.js';
import LoadMoreButtonComponent from './components/load-more-button.js';
import SiteMenuComponent from './components/site-menu.js';
import SortingComponent from './components/sorting.js';
import TaskComponent from './components/task.js';
import TasksComponent from './components/tasks.js';
import TaskEditComponent from './components/task-edit.js';
import {generateFilters} from './mock/filter.js';
import {generateTasks} from './mock/task.js';
import {RenderPosition, render} from './utils.js';

const TASK_COUNT = 40;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;


const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createFilterTemplate(filters));
render(siteMainElement, createBoardTemplate());

const boardElement = document.querySelector(`.board`);
const taskListElement = boardElement.querySelector(`.board__tasks`);

render(boardElement, createSortingTemplate(), RenderPosition.AFTERBEGIN);
render(taskListElement, createTaskEditTemplate(tasks[0]));

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

tasks.slice(1, showingTasksCount).forEach((task) => {
  render(taskListElement, createTaskTemplate(task));
});

render(boardElement, createLoadMoreButtonTemplate());

const loadMoreButton = document.querySelector(`.load-more`);

loadMoreButton.addEventListener(`click`, () => {
  const currentTasksCount = showingTasksCount;
  showingTasksCount += SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(currentTasksCount, showingTasksCount).forEach((task) => {
    render(taskListElement, createTaskTemplate(task));
  });

  if (showingTasksCount >= tasks.length) {
    loadMoreButton.remove();
  }
});
