import candyReducer from './candyReducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  candies: candyReducer,
});

export default rootReducer;
