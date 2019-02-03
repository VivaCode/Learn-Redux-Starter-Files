import React from 'react';

import {render} from 'react-dom';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

//import css
import css from './styles/style.styl';

//import components
import Main from './Components/Main';
import PhotoGrid from './Components/PhotoGrid';
import Single from './Components/Single';

const router = (
    <Router history={browserHistory}>
        <Route path='/' component={Main}></Route>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path='/view/:postId' component={Single}></Route>
    
    </Router>
)


render(router, document.getElementById('root'));
