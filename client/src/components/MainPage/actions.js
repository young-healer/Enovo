export const actionTypes = {
  GET_STATUS_REQUEST: 'GET_STATUS_REQUEST',
  GET_STATUS_SUCCESS: 'GET_STATUS_SUCCESS',
  GET_STATUS_FAIL: 'GET_STATUS_FAIL',
  GET_STATUS_BY_DATE_REQUEST: 'GET_STATUS_BY_DATE_REQUEST',
  GET_STATUS_BY_DATE_SUCCESS: 'GET_STATUS_BY_DATE_SUCCESS',
  GET_STATUS_BY_DATE_FAIL: 'GET_STATUS_BY_DATE_FAIL',
};

export const getAllStatus = (payload) => {
    return {
      type: actionTypes.GET_STATUS_REQUEST,
      payload,
    }
};

export const getAllStatusSuccess = (payload) => {
  return {
    type: actionTypes.GET_STATUS_SUCCESS,
    payload,
  }
};

export const getAllStatusFail = (payload) => {
  return {
    type: actionTypes.GET_STATUS_FAIL,
    payload,
  }
};

export const getStatusByDate = (payload) => {
  return {
    type: actionTypes.GET_STATUS_BY_DATE_REQUEST,
    payload,
  }
};

export const getStatusByDateSuccess = (payload) => {
  return {
    type: actionTypes.GET_STATUS_BY_DATE_SUCCESS,
    payload,
  }
};

export const getStatusByDateFail = (payload) => {
  return {
    type: actionTypes.GET_STATUS_BY_DATE_FAIL,
    payload,
  }
};