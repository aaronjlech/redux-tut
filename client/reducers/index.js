import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import comments from './comments.js';
import posts from './posts.js';


const rootReducer = combineReducers({posts, comments, routing: routerReducer})

export default rootReducer;
