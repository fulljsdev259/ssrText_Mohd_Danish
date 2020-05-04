import { handleActions } from "redux-actions";
import update from "immutability-helper";
import * as constants from "../constants";

const initialState = {
  categoryData: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    data: {},
  },
};

//functions to get category data
const categoryDataRequest = (state, action) => {
  return update(state, {
    categoryData: {
      isLoading: { $set: true },
      isError: { $set: false },
      isSuccess: { $set: false },
      data: { $set: {} },
    },
  });
};

const categorydDataSuccess = (state, action) => {
  return update(state, {
    categoryData: {
      isLoading: { $set: false },
      isError: { $set: false },
      isSuccess: { $set: true },
      data: { $set: action.payload },
    },
  });
};

const categoryDataError = (state, action) => {
  return update(state, {
    categoryData: {
      isLoading: { $set: false },
      isError: { $set: true },
      isSuccess: { $set: false },
      data: { $set: action.payload },
    },
  });
};
//end

export default handleActions(
  {
    [constants.GET_CATEGORY_REQUEST]: categoryDataRequest,
    [constants.GET_CATEGORY_SUCCESS]: categorydDataSuccess,
    [constants.GET_CATEGORY_ERROR]: categoryDataError,
  },
  initialState
);
