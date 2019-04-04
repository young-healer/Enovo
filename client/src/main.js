import { combineReducers } from 'redux';

import mainPageReducer from './components/MainPage/reducer';

const reducers = {
  mainPageReducer,
};

export const reducer = combineReducers(reducers);