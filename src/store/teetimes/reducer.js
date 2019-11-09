import * as types from "./constants";

const initialState = {
  all: [],
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_TEETIMES_PENDING:
    case types.ADD_TEETIME_PENDING:
    case types.REMOVE_TEETIME_PENDING:
      return state;

    case types.FETCH_ALL_TEETIMES_FAILED:
    case types.ADD_TEETIME_FAILED:
    case types.REMOVE_TEETIME_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case types.FETCH_ALL_TEETIMES_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case types.ADD_TEETIME_SUCCESS:
      return {
        ...state,
        all: [...state.all, action.payload]
      };

    case types.REMOVE_TEETIME_SUCCESS:
      return {
        ...state,
        all: state.all.filter(teetime => teetime.id === action.payload.id)
      };

    default:
      return state;
  }
};