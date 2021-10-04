import * as actions from "../actions";
import { PUBLICURL } from "../../../utils/constants";

const {
    getNEWSPending,
    GET_NEWS_PENDING,
    getNEWS,
    getNEWSSuccess,
} = actions;

describe('articles actions', () => {
    it('getArticlesPending returns and action with type', () => {
        const expected = {
            type: GET_NEWS_PENDING
        };
        const received = getNEWSPending();

        expect(expected).toEqual(received);
    });

    describe("getArticles", () => {
        it('calls dispatch with getArticlesPending()', async () => {
            const mockDispatch = jest.fn();

            
            // eslint-disable-next-line no-undef
            fetchMock.mockOnce(
                JSON.stringify("the next call to fetch will always return this as the body")
            );

            await getNEWS()(mockDispatch);

            expect(mockDispatch).toHaveBeenCalledWith(getNEWSPending());
        });

        it("calls fetch with PUBLIC_URL", async () => {
            const mockDispatch = jest.fn();

            
            // eslint-disable-next-line no-undef
            fetchMock.mockOnce(
                JSON.stringify(
                    "the next call to fetch will always return this as the body"
                )
            );

            await getNEWS()(mockDispatch);

            
            // eslint-disable-next-line no-undef
            expect(fetchMock).toHaveBeenCalledWith(PUBLICURL);
        });

        it("calls dispatch with getArticles success with result from fetch", async () => {
            const mockDispatch = jest.fn();
            const result = ['article']

            
            // eslint-disable-next-line no-undef
            fetchMock.mockOnce(
                JSON.stringify(result)
            );

            await getNEWS()(mockDispatch);

            expect(mockDispatch).toHaveBeenCalledTimes(2);
            expect(mockDispatch).toHaveBeenLastCalledWith(getNEWSSuccess(result));
        });
    });

});