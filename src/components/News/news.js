import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { New } from './newsView';
import { Nav } from '../nav'
import { CircularProgress } from "@material-ui/core";
import { getNEWS } from '../../store/news/actions';
import { selectNewsError, selectNewsLoading, selectNews } from '../../store/news/selectors'

export const News = () => {
    const dispatch = useDispatch();

    const error = useSelector(selectNewsError);
    const loading = useSelector(selectNewsLoading);
    const news = useSelector(selectNews);
    console.log('error comp', error);
    const reload = () => {
        dispatch(getNEWS());
    };

    useEffect(() => {
        reload();
    }, []);


    return <>
        <Nav />
        {/* {news.map((newfromnews, i) => { <New props={newfromnews} key={newfromnews.id} /> })} */}
        {error ? (
            <>
                <h3>Error: {error}</h3>
                <button onClick={reload}>Refresh</button>
            </>
        ) : (
            news.map((newfromnews) => (
                <New props={newfromnews} key={newfromnews.id} />
            ))

        )}
        {loading && <CircularProgress />}
    </>
}