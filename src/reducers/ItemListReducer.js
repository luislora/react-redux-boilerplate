import {types} from '../action_types/index';
const defaultState = { itemList: ['Item 1', 'Item 2', 'Item 3']};

export default function ItemListReducer(state = defaultState, action) {
  // const itemList = state.itemList;
    
  switch (action.type) {
  case types.FETCH_LIST:
    return state;
  default:
    return state;
  }
}