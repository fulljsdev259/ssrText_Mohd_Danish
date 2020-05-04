import {createAction} from 'redux-actions';
import * as constants from './constants';

export const categoryRequest= createAction(constants.GET_CATEGORY_REQUEST);
export const categorySuccess= createAction(constants.GET_CATEGORY_SUCCESS);
export const categoryError= createAction(constants.GET_CATEGORY_ERROR);
