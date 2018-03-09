import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore, compose } from "redux"
import { Provider } from "react-redux"

import promise from 'redux-promise'

import App from './main/app'
import reducers from './main/reducers'



//const store = applyMiddleware(promise)(createStore)(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(promise)
))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('app'))