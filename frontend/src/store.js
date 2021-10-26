import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import data from './data';

const initialState = {};
//this redux store does nothing, it simply returns products from data.js in frontend
const reducer = (state, action) => {

    return { products: (data.products) };

};
//if windows.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ does not exist use default compose that you are importing.
//allows us to see redux store in inspect window
//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
//create store using following code
const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;