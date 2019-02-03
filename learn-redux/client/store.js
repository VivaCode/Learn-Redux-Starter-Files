import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import Reducers
import rootReducer from './Reducers/index';

//import data
import { comments, posts } from './data';

//create Obj for default data
const defaultState = {
    comments,
    posts
};

//create store and history
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
