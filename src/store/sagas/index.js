import { takeEvery, put } from 'redux-saga/effects';
import * as actionTypes from '../types';
import * as actions from '../actions';
import { services } from 'services/services';

export function* fetchHomeSaga() {
  try {
    const response = yield services.fetchAny();
    yield put(actions.fetchHomeSuccess(response.data.Global));
  } catch (error) {
    yield put(actions.fetchHomeFail(error));
  }
}

export function* watchHome() {
  yield takeEvery(actionTypes.FETCH_HOME, fetchHomeSaga);
}
