import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';

const initialState = {};
//this redux store does nothing, it simply returns products from data.js in frontend
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
});



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