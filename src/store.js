import {createStore, combineReducers} from 'redux';
import ItemListReducer from './reducers/ItemListReducer';

const reducer = combineReducers({
  ItemListReducer
});

let store = createStore(reducer);

export default store;