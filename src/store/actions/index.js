import * as actionTypes from '../types';

export const fetchHome = () => {
  return {
    type: actionTypes.FETCH_HOME
  };
};
export const fetchHomeSuccess = (data) => {
  return {
    type: actionTypes.FETCH_HOME_SUCCESS,
    payload: {
      data: data
    }
  };
};
export const fetchHomeFail = (error) => {
  return {
    type: actionTypes.FETCH_HOME_FAIL,
    payload: {
      error: error
    }
  };
};
