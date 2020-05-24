import React, { useState } from 'react';

import './Movie.scss';

import { IMovie } from '../../App.types';

interface IMovieProps {
    movie: IMovie,
    deleteMovie: Function,
    watchMovie: Function,
    editMovie: Function
}

const Movie = (props: IMovieProps) => {
    const { movie, deleteMovie, watchMovie, editMovie } = props;

    const [editing, setEditing] = useState(false);
    const [toEditTitle, setToEditTitle] = useState(movie.movieTitle);
    const [randomNumber] = useState(Math.floor(Math.random() * 2));

    const cancelEdit = (): void => {
        setEditing(false);
        setToEditTitle(movie.movieTitle);
    };
    
    return (
        <div className="movie-container" >
            <div className="movie-wrapper">
                <label className="movie-watched">
                    <input type="checkbox" disabled={editing} checked={movie.movieWatched} onChange={() => watchMovie(movie.order)} />
                    Watched
                </label>
                { editing ?
                    <input className="movie-title-edit" type="text" value={toEditTitle} onChange={e => setToEditTitle(e.target.value)} />
                    :
                    <span className="movie-title">{movie.movieTitle}</span>
                }
                <img className="movie-poster" alt="Movie Poster" src={require(`../../assets/img/poster${randomNumber}.jpg`)} />
                <div className="movie-genres">
                    <span className="genres-tag">Genre(s):</span>
                    { movie.movieGenres.map(genre => <span key={genre}>{`#${genre}`}</span>) }
                </div>
                <div className="movie-editing">
                    { editing ? 
                        <React.Fragment>
                            <button className="edit-button" onClick={() => editMovie(movie.order, toEditTitle)}>Save</button>
                            <button className="edit-button" onClick={() => cancelEdit()}>Cancel</button>
                        </React.Fragment>
                        :
                        <button className="edit-button" onClick={() => setEditing(true)}>Edit</button>
                    }
                </div>
                <button className="movie-delete-button" disabled={editing} onClick={() => deleteMovie(movie.order)}>Delete</button>
            </div>
        </div>
    );
};

export default Movie;