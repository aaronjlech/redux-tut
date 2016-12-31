// let's go!

// import libraries
import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider} from 'react-redux';
import store, {history} from './store';
// components
import Main from './components/Main.js'
import PhotoGrid from './components/Photogrid.js'
import Single from './components/single.js'

// stylesheet
import css from './styles/style.styl';

const router =(

   <Router history={browserHistory}>
      <Route path='/' component={Main}>
         <IndexRoute component={PhotoGrid}></IndexRoute>
         <Route path='/view/:postId' component={Single}>
         </Route>
      </Route>
   </Router>
      )

         render(router, document.getElementById('root'))
