import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.scss';

import BillboardPage from './pages/BillboardPage/BillboardPage';

const App = () => {
    return (
        <div className="app-container">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/genre=:genre" component={BillboardPage} />
                    <Route path="/*" component={BillboardPage} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
