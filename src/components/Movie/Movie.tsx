import React from 'react';

import './Movie.scss';

import { IMovie } from '../../App.types';

interface IMovieProps {
    movie: IMovie,
    deleteMovie: Function
}

const Movie = (props: IMovieProps) => {
    const { movie, deleteMovie } = props;
    
    return (
        <div className="movie-container" onClick={() => deleteMovie(movie.order)} >{movie.movieTitle}</div>
    );
}

export default Movie;