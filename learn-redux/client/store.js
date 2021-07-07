import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import Reducers
import rootReducer from './Reducers/index';

//import data
import { comments } from './data/comments';
import { posts } from './data/posts';


//create Obj for default data
const defaultState = {
    comments,
    posts
};

//create store and history
const store = createStore(rootReducer, defaultState,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
