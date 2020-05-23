import React, { useState } from 'react';

import './BillboardList.scss';

import Movie from '../Movie/Movie';
import GenreOptions from '../GenreOptions/GenreOptions';
import Loading from '../Loading/Loading';

import { IMovie } from '../../App.types';

interface IBillboardListProps {
    movies: Array<IMovie>;
    fetching: boolean,
    deleteMovie: Function
}

const BillboardList = (props: IBillboardListProps) => {
    const { fetching, movies, deleteMovie } = props;
    const [genre, setGenre] = useState('');

    const sortList = (): Array<IMovie> => {
        let orderedMovies = [...movies].sort((a, b) => (a.order > b.order ? 1 : -1)).sort((a, b) => (a.movieWatched === b.movieWatched ? 0 : a.movieWatched ? 1 : -1));

        orderedMovies = genre ? orderedMovies.filter(movie => movie.movieGenres.includes(genre)) : orderedMovies;

        return orderedMovies;
    };
    
    return (
        <div className="billboard-list-container">
            <div className="billboard-list-wrapper">
                { fetching ? <Loading /> : 
                    <div className="billboard-list">
                        <GenreOptions genre={genre} setGenre={setGenre} />
                        { sortList().map(movie => <Movie key={movie.movieTitle} movie={movie} deleteMovie={deleteMovie}></Movie>) }
                    </div>
                }
            </div>
        </div>
    );
};

export default BillboardList;
