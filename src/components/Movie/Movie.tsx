import React from 'react';

import './Movie.scss';

import { IMovie } from '../../App.types';

interface IMovieProps {
    movie: IMovie,
    deleteMovie: Function,
    watchMovie: Function
}

const Movie = (props: IMovieProps) => {
    const { movie, deleteMovie, watchMovie } = props;
    
    const randomNumber = () => {
        return Math.floor(Math.random() * 2);
    };

    return (
        <div className="movie-container" >
            <div className="movie-wrapper">
                <label className="movie-watched">
                    <input type="checkbox" checked={movie.movieWatched} onChange={() => watchMovie(movie.order)} />
                    Watched
                </label>
                <span className="movie-title">{movie.movieTitle}</span>
                <img className="movie-poster" alt="Moie Poster" src={require(`../../assets/img/poster${randomNumber()}.jpg`)} />
                <div className="movie-genres">
                    <span className="genres-tag">Genre(s):</span>
                    { movie.movieGenres.map(genre => <span key={genre}>{`#${genre}`}</span>) }
                </div>
                <button className="movie-delete-button" onClick={() => deleteMovie(movie.order)}>Delete</button>
            </div>
        </div>
    );
};

export default Movie;