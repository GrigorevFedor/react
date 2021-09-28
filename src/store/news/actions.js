import { PUBLICURL } from "../../utils/constants";

export const GET_NEWS_PENDING = "NEWS::GET_PENDING";
export const GET_NEWS_SUCCESS = "NEWS::GET_SUCCESS";
export const GET_NEWS_FAILURE = "NEWS::GET_FAILURE";

const getNEWSPending = () => ({
    type: GET_NEWS_PENDING,
});

const getNEWSSuccess = (articles) => ({
    type: GET_NEWS_SUCCESS,
    payload: articles,
});

const getNEWSFailure = (error) => ({
    type: GET_NEWS_FAILURE,
    payload: error,
});

export const getNEWS = () => async (dispatch) => {
    dispatch(getNEWSPending());

    try {

        const response = await fetch(PUBLICURL);
        console.log('response.ok', response.ok);
        if (!response.ok) {
            console.log('enter error');
            throw new Error(`error ${response.status}`);
        }

        const result = await response.json();
        dispatch(getNEWSSuccess(result));
    } catch (e) {
        console.log(e);
        console.log('enter catch');
        dispatch(getNEWSFailure(e.message));
    }
};