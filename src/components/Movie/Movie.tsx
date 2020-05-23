import React from 'react';

import './Movie.scss';

import { IMovie } from '../../App.types';

interface IMovieProps {
    movie: IMovie
}

const Movie = (props: IMovieProps) => {
    const { movie } = props;
    
    return (
        <div className="movie-container">{movie.movieTitle}</div>
    );
}

export default Movie;