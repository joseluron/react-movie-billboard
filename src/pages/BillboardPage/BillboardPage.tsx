import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './BillboardPage.scss';

import BillboardList from '../../components/BillboardList/BillboardList';

import { getBillboard } from '../../redux/actions/Billboard';
import { IAppState, IBillboardState } from '../../App.types';

interface IBillboardPageProps {
    billboard: IBillboardState,
    getBillboard: Function
}

const BillboardPage = (props: IBillboardPageProps) => {
    const { getBillboard, billboard } = props;
    const { fetched, fetching, movies } = billboard;

    useEffect(() => {
        if (!fetched) {
            getBillboard();
        }
    }, [fetched, getBillboard]);
    
    return (
        <div className="billboard-page-container">
            <div className="billboard-page-wrapper">
                <BillboardList movies={movies} fetching={fetching} />
            </div>
        </div>
    );
}

const mapStateToProps = (state: IAppState) => ({
    billboard: state.billboard
});

export default connect( mapStateToProps, { getBillboard } )(BillboardPage);
