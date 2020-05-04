import { takeLatest, takeEvery, all } from "redux-saga/effects";
import * as constants from "./constants";
import {categoryDataRequest} from './category/action';


export function* watchActions() {
    yield takeLatest(constants.GET_CATEGORY_REQUEST, categoryDataRequest);
}

export default function* rootSaga() {
    yield all([watchActions()]);
}