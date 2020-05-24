import React, { useState, useEffect } from 'react';

import './SearchOptions.scss';

interface ISearchOptionProps {
    searchedMovie: string,
    searchMovie: Function
}

const SearchOptions = (props: ISearchOptionProps) => {
    const { searchedMovie, searchMovie } = props;
    
    const [toSearch, setToSearch] = useState('');

    useEffect(() => {
        setToSearch(searchedMovie);
    },[searchedMovie]);

    const searchByEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            searchMovie(toSearch);
        }
    };
    
    return (
        <div className="search-options-container">
            <div className="search-options-wrapper">
                <div className="search-input">
                    <input type="text" placeholder="Search movie title" value={toSearch} onChange={e => setToSearch(e.target.value)} onKeyDown={e => searchByEnter(e)} />
                    <button onClick={() => searchMovie(toSearch)}>Search</button>
                </div>
            </div>
        </div>
    );
};

export default SearchOptions;
