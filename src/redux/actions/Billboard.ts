import { Store, AnyAction } from 'redux';

import AppConstants from '../../App.constants';
import { IAppState, IMovie, INewMovieData } from '../../App.types';
import { store } from '../store';

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


export const getBillboard = () => (dispatch: Store['dispatch']) => {
    dispatch(fetchBillboard());
    setTimeout(() => {
        dispatch(fetchedBillboard());
    }, 3000);
}

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
}
