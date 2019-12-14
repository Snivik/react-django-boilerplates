import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, combineReducers, createStore} from "redux";
import {createTaskReducer, taskViewsetReducers} from "./redux/task";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';


const reducers = {...taskViewsetReducers, create: createTaskReducer};

const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunk));

window.store = store;

ReactDOM.render(<Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
