import BoardPresenter from './presenter/board-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';

import PointModel from './model/points-model.js';
import DestinationModel from './model/destinations-model.js';
import OfferModel from './model/offers-model.js';
import FilterModel from './model/filter-model.js';
import MockService from './service/mock-service.js';
import NewPointButtonPresenter from './presenter/new-point-button-presenter.js';

const bodyElement = document.querySelector('body');
const headerElement = bodyElement.querySelector('.page-header');
const tripInfoElement = headerElement.querySelector('.trip-main');
const filterElement = tripInfoElement.querySelector('.trip-controls__filters');
const mainElement = bodyElement.querySelector('.page-main');
const eventListElement = mainElement.querySelector('.trip-events');

const mockService = new MockService();
const pointModel = new PointModel(mockService);
const destinationModel = new DestinationModel(mockService);
const offerModel = new OfferModel(mockService);
const filterModel = new FilterModel();

const newPointButtonPresenter = new NewPointButtonPresenter ({
  container: tripInfoElement,
});

const boardPresenter = new BoardPresenter ({
  container: eventListElement,
  tripInfoContainer: tripInfoElement,
  pointModel,
  destinationModel,
  offerModel,
  filterModel,
  newPointButtonPresenter: newPointButtonPresenter
});

const filterPresenter = new FilterPresenter({
  filterContainer: filterElement,
  filterModel,
  pointModel
});

newPointButtonPresenter.init({
  onButtonClick: boardPresenter.newPointButtonClickHandler
});

filterPresenter.init();
boardPresenter.init();
