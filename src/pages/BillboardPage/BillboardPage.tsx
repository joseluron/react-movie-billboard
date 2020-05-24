import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import './BillboardPage.scss';

import BillboardList from '../../components/BillboardList/BillboardList';
import AddMovie from '../../components/AddMovie/AddMovie';

import { getBillboard, addNewMovie, deleteMovie, searchMovie, watchMovie, editMovie } from '../../redux/actions/Billboard';
import { IAppState, IBillboardState } from '../../App.types';

interface IBillboardPageProps extends RouteComponentProps {
    billboard: IBillboardState,
    getBillboard: Function,
    addNewMovie: Function,
    deleteMovie: Function,
    searchMovie: Function,
    watchMovie: Function,
    editMovie: Function
}

const BillboardPage = (props: IBillboardPageProps) => {
    const { getBillboard, addNewMovie, deleteMovie, searchMovie, watchMovie, editMovie, billboard, match } = props;
    const { fetched, fetching, movies, searchedMovie } = billboard;

    useEffect(() => {
        if (!fetched) {
            getBillboard();
        }
    }, [fetched, getBillboard]);

    return (
        <div className="billboard-page-container">
            <div className="billboard-page-wrapper">
                <AddMovie addNewMovie={addNewMovie} />
                <BillboardList movies={movies} presetGenre={match.params} searchedMovie={searchedMovie} fetching={fetching} deleteMovie={deleteMovie} searchMovie={searchMovie} watchMovie={watchMovie} editMovie={editMovie} />
            </div>
        </div>
    );
};

const mapStateToProps = (state: IAppState) => ({
    billboard: state.billboard
});

export default connect(mapStateToProps, { getBillboard, addNewMovie, deleteMovie, searchMovie, watchMovie, editMovie })(BillboardPage);
