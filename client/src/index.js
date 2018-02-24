import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import postsReducer from './store/reducers/posts';
import categoriesReducer from './store/reducers/categories';
import commentsReducer from './store/reducers/comments';
import App from './App';
// import 'antd/dist/antd.css';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = process.env.NODE_ENV==="development"?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :null|| compose;

const rootReducer= combineReducers({
    posts:postsReducer,
    categories:categoriesReducer,
    comments:commentsReducer
});

const store = createStore(rootReducer, 
    composeEnhancers(applyMiddleware(thunk))
);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
