import React, { useState, useEffect } from 'react';
import { callApi } from '../../api';
import CardContainer from '../CardContainer';
function DashBoard(props) {
    const [trending, settrending] = useState([]);
    const [upcoming, setupcoming] = useState([]);
    const [topRated, settopRated] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        callApi(`/3/movie/upcoming?page=${page}`, 'GET', null)
            .then(resp => {
                setupcoming(resp.results);
            });

        callApi(`/3/trending/movie/week?page=${page}`, 'GET', null)
            .then(resp => {
                settrending(resp.results);
            });

        callApi(`/3/movie/top_rated?page=${page}`, 'GET', null)
            .then(resp => {
                settopRated(resp.results);
            });
    }, []);

    return (
        <div className='dashBoard pb-5'>
            <CardContainer title='Trending' data={trending} />
            <CardContainer title='Upcoming' data={upcoming} />
            <CardContainer title='Top Rated' data={topRated} />
        </div>
    );
}

export default DashBoard;

