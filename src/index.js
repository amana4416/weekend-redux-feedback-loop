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
const feedbackAnswers = (state = {feeling: 5, understanding: 5, support:5, comments: 'i love redux'}, action) => {
    //going to use a switch here because i think i'm going to end up only using one reducer? we'll see
    //but if end up using only one reducer, i'll have 4 if statements and that's going to be hard to read/bulky
    //a switch is in this case for better readability
    switch (action.type) {
        case 'ADD_FEELINGS':
            return { ...state, feeling: action.payload };
        case 'ADD_UNDERSTANDING':
            return { ...state, understanding: action.payload };
        case 'ADD_SUPPORT':
            return { ...state, support: action.payload };
        case 'ADD_COMMENT':
            return { ...state, comments: action.payload };
        default:
            return state;
    }
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
