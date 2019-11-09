import * as types from "./constants"
import axios from "axios"
import { BASE_URL } from "./constants"

export const fetchAllTeetimes = () => async dispatch => {
    dispatch({
        type: types.FETCH_ALL_TEETIMES_PENDING
    });
    try {
        let response = await axios.get(BASE_URL);
        dispatch({
            type: types.FETCH_ALL_TEETIMES_SUCCESS,
            payload: response.data
        });
    } catch (err) {
        dispatch({
            type: types.FETCH_ALL_TEETIMES_FAILED,
            payload: err
        });
    }
};