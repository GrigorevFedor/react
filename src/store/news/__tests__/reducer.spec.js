import { newsReducer, initialState } from "../reducer";
import { REQUEST_STATUS } from "../../../utils/constants";
import * as t from '../actions'

describe('reducer', () => {
    it('PENDING', () => {
        const action = {
            type: t.GET_NEWS_PENDING,
        }

        expect(newsReducer(initialState, action)).toEqual({
            ...initialState,
            request: {
                error: null,
                status: REQUEST_STATUS.PENDING,
            },
        })
    });

    it('GET_NEWS_SUCCESS', () => {
        const action = {
            type: t.GET_NEWS_SUCCESS,
            payload: [1, 2, 3],
        }

        const initialState = {
            list: [],
            request: {
                error: null,
                status: REQUEST_STATUS.PENDING,
            },
        };

        expect(newsReducer(initialState, action)).toEqual({
            ...initialState,
            list: action.payload,
            request: {
                error: null,
                status: REQUEST_STATUS.SUCCESS,
            },
        })
    });
    it('GET_NEWS_FAILURE', () => {
        const action = {
            type: t.GET_NEWS_FAILURE,
            payload: 'error'
        }

        expect(newsReducer(initialState, action)).toEqual({
            ...initialState,
            request: {
                error: action.payload,
                status: REQUEST_STATUS.FAILURE,
            },
        })
    });
});