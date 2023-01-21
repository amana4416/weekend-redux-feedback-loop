import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//redux imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

//reducer(s)
//feelings will be going into an object, so set the state to start off as an empty object
//already have dummy data in the database, so we can leave the state as an empty array
const feedbackAnswers = (state = {}, action) => {
    return state;
}

//create store
const reduxStore = createStore(
    combineReducers({
        //sending over feebackAnswers to use in react app
        feedbackAnswers,
    }),
    //this will show us previous state, the action, and next state in the console on the DOM
    applyMiddleware(logger)
);


ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
