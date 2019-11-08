export const fetchAllCustomers = () => async dispatch => {
    dispatch({
        type: types.FETCH_ALL_CUSTOMERS_PENDING
    });
    try {
        let response = await axios.get(BASE_URL);
        dispatch({
            type: types.FETCH_ALL_CUSTOMERS_SUCCESS,
            payload: response.data
        });
    } catch (err) {
        dispatch({
            type: types.FETCH_ALL_CUSTOMERS_FAILED,
            payload: err
        });
    }
};