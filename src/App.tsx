import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { connect } from 'react-redux';

import { getBillboard } from './redux/actions/Billboard';
import { IAppState, IBillboardState } from './App.types';

interface AppProps {
    billboard: IBillboardState,
    getBillboard: Function
}

const App = (props: AppProps) => {
    const { getBillboard, billboard } = props;

    React.useEffect(() => {
        if(!billboard.fetched) {
            getBillboard();
        }
    }, [billboard.fetched, getBillboard])

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    { (billboard.fetching || !billboard.fetched) ? <p>Loading billboard...</p> : <p>Billboard loaded! Look at the console log!</p> }
                </div>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

const mapStateToProps = (state: IAppState) => ({
    billboard: state.billboard
})

export default connect(mapStateToProps, { getBillboard })(App);
