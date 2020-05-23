import React from 'react';

import './BillboardList.scss';

import Movie from '../Movie/Movie';
import Loading from '../Loading/Loading';

import { IMovie } from '../../App.types';

interface IBillboardListProps {
    movies: Array<IMovie>;
    fetching: boolean
}

const BillboardList = (props: IBillboardListProps) => {
    const { fetching, movies } = props;
    
    const orderedMovies = movies.sort((a, b) => (a.order > b.order ? 1 : -1)).sort((a, b) => (a.movieWatched === b.movieWatched ? 0 : a.movieWatched ? 1 : -1));
    
    return (
        <div className="billboard-list-container">
            <div className="billboard-list-wrapper">
                { fetching ? <Loading /> : (orderedMovies.map(movie => <Movie key={movie.movieTitle} movie={movie}></Movie>)) }
            </div>
        </div>
    );
}

export default BillboardList;
