import { Store, AnyAction } from 'redux';

import AppConstants from '../../App.constants';
import { IAppState, IMovie, INewMovieData } from '../../App.types';
import { store } from '../store';

// DISPATCHERS
const fetchBillboard = (): AnyAction => {
    return {
        type: AppConstants.BILLBOARD_FETCHING
    };
};

const fetchedBillboard = (): AnyAction => {
    return {
        type: AppConstants.BILLBOARD_FETCHED_SUCCESS
    };
};

const addMovie = (): AnyAction => {
    return {
        type: AppConstants.ADD_MOVIE
    };
};

const addedMovie = (toAddMovie: IMovie): AnyAction => {
    return {
        type: AppConstants.ADDED_MOVIE_SUCCESS,
        movie: toAddMovie
    };
};

const eraseMovie = (): AnyAction => {
    return {
        type: AppConstants.DELETE_MOVIE
    };
};

const erasedMovie = (erasedMovieList: Array<IMovie>): AnyAction => {
    return {
        type: AppConstants.DELETED_MOVIE_SUCCESS,
        movies: erasedMovieList
    };
};

const findMovie = (): AnyAction => {
    return {
        type: AppConstants.SEARCH_MOVIE
    };
};

const foundMovie = (searchedMovie: string): AnyAction => {
    return {
        type: AppConstants.SEARCHED_MOVIE_SUCCESS,
        searchedMovie
    };
};

// ACTIONS
export const getBillboard = () => (dispatch: Store['dispatch']) => {
    dispatch(fetchBillboard());
    setTimeout(() => {
        dispatch(fetchedBillboard());
    }, 3000);
};

export const addNewMovie = (newMovieData: INewMovieData) => (dispatch: Store['dispatch']) => {
    dispatch(addMovie());
    setTimeout(() => {
        const currentStore: IAppState = store.getState();
        const newBillboardMovie: IMovie = {
            movieTitle: newMovieData.movieTitle,
            movieGenres: newMovieData.movieGenres,
            movieWatched: false,
            order: currentStore.billboard.movies.length + 1
        };
        dispatch(addedMovie(newBillboardMovie));
    }, 3000);
};

export const deleteMovie = (movieOrder: number) => (dispatch: Store['dispatch']) => {
    dispatch(eraseMovie());
    setTimeout(() => {
        const currentStore: IAppState = store.getState();
        const filteredMovies = [...currentStore.billboard.movies].filter(movie => movie.order !== movieOrder);
        const reorderedMovies = [...filteredMovies].map((movie, index) => {
            movie.order = index + 1;
            return movie;
        });
        dispatch(erasedMovie(reorderedMovies));
    }, 3000);
};

export const searchMovie = (toSearchMovie: string) => (dispatch: Store['dispatch']) => {
    dispatch(findMovie());
    setTimeout(() => {
        dispatch(foundMovie(toSearchMovie));
    }, 3000);
};
