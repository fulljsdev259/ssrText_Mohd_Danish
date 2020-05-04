import { combineReducers } from "redux";
import categories from './category/reducer';

const appReducer = combineReducers({
    categories
  });

  export default appReducer