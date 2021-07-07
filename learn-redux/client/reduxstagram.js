import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';


//import css
import css from './styles/style.styl';

//import components
import Main from './Components/Main';
import PhotoGrid from './Components/PhotoGrid';
import Single from './Components/Single';

const router = (
    <Router history={browserHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path='/view/:postId' component={Single}></Route>
        </Route>
    </Router>
)


render(router, document.getElementById('root'));
