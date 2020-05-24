import React, { useState, useEffect, useCallback } from 'react';

import './BillboardList.scss';

import Movie from '../Movie/Movie';
import GenreOptions from '../GenreOptions/GenreOptions';
import SearchOptions from '../SearchOptions/SearchOption';
import Loading from '../Loading/Loading';

import { IMovie, IMatchParams } from '../../App.types';

interface IBillboardListProps {
    presetGenre: IMatchParams,
    movies: Array<IMovie>,
    searchedMovie: string,
    fetching: boolean,
    deleteMovie: Function,
    searchMovie: Function,
    watchMovie: Function,
    editMovie: Function
}

const BillboardList = (props: IBillboardListProps) => {
    const { presetGenre, fetching, movies, searchedMovie, deleteMovie, searchMovie, watchMovie, editMovie } = props;
    const [genre, setGenre] = useState('');

    useEffect(() => {
        if (presetGenre['genre']) {
            setGenre(presetGenre['genre']);
        }
    },[presetGenre]);

    const sortList = useCallback(() => {
        let orderedMovies = genre ? movies.filter(movie => movie.movieGenres.includes(genre)) : [...movies];
        orderedMovies = searchedMovie ? orderedMovies.filter(movie => movie.movieTitle.toLowerCase().includes(searchedMovie.toLowerCase())): orderedMovies;
        orderedMovies = orderedMovies.sort((a, b) => (a.order > b.order ? 1 : -1)).sort((a, b) => (a.movieWatched === b.movieWatched ? 0 : a.movieWatched ? 1 : -1));

        return orderedMovies;
    }, [movies, genre, searchedMovie]);
        
    return (
        <div className="billboard-list-container">
            <div className="billboard-list-wrapper">
                { fetching ? <Loading /> : 
                    <div className="billboard-list">
                        <div className="options-wrapper">
                            <GenreOptions genre={genre} setGenre={setGenre} />
                            <SearchOptions searchedMovie={searchedMovie} searchMovie={searchMovie} />
                        </div>
                        <div className="movie-list">
                            { sortList().map(movie => <Movie key={movie.movieTitle} movie={movie} deleteMovie={deleteMovie} watchMovie={watchMovie} editMovie={editMovie} />) }
                        </div>

                    </div>
                }
            </div>
        </div>
    );
};

export default BillboardList;
