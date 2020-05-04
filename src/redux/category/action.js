import * as actions from "../actions";
import { call, put } from "redux-saga/effects";

export function* categoryDataRequest(action) {
    yield put(actions.categorySuccess(action.payload))
}