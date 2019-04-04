import { actionTypes } from './actions';
import { getAllStatusRequest, getStatusByDateRequest } from './services';

const INITIAL_STATE = {
  isFetching: false,
  statuses: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.GET_STATUS_REQUEST:
      getAllStatusRequest().then(statuses => {
        action.payload.successAction({value: statuses});
      }).catch(error => {
        console.log('--------error', error);
        action.payload.failAction();
      });
      return {
        ...state,
        isFetching: true,
      };

    case actionTypes.GET_STATUS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        statuses: action.payload.value,
      };

    case actionTypes.GET_STATUS_FAIL:
      return {
        ...state,
        isFetching: false,
      };

    case actionTypes.GET_STATUS_BY_DATE_REQUEST:
      getStatusByDateRequest(action.payload.date).then(statuses => {
        action.payload.successAction({value: statuses});
      }).catch(error => {
        console.log('--------error', error);
        action.payload.failAction();
      });
      return {
        ...state,
        isFetching: true,
      };

    case actionTypes.GET_STATUS_BY_DATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        statuses: action.payload.value,
      };

    case actionTypes.GET_STATUS_BY_DATE_FAIL:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
}