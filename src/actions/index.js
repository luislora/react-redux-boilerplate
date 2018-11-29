import {types} from '../action_types/index';

export const fetchItemList = () => {
  return {
    type: types.FETCH_LIST
  };
};
