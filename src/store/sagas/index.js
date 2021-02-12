import { takeEvery, put } from 'redux-saga/effects';
import * as actionTypes from '../types';
import axios from 'axios';
import * as actions from '../actions';

export function* fetchHomeSaga() {
  try {
    const response = yield axios.get('https://api.covid19api.com/summary');
    //const response = yield call(()=> axios.get("https://api.covid19api.com/summary"));
    yield put(actions.fetchHomeSuccess(response.data.Global));
  } catch (error) {
    yield put(actions.fetchHomeFail(error));
  }
}

export function* watchHome() {
  yield takeEvery(actionTypes.FETCH_HOME, fetchHomeSaga);
}
