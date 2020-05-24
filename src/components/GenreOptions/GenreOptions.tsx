import React from 'react';

import './GenreOptions.scss';

interface IGenreOptionsProps {
    genre: string,
    setGenre: Function
}

const GenreOptions = (props: IGenreOptionsProps) => {
    const { genre, setGenre } = props;

    const genreOptions = ['horror', 'romance', 'comedy'];

    return (
        <div className="genre-options-container">
            <div className="genre-options-wrapper">
                {genreOptions.map(option => <label key={option} className="option">
                    {option}
                    <input type="radio" value={option} checked={genre === option} onChange={() => setGenre(option)} />
                </label>)}
                <button className="option-button" onClick={() => setGenre("")}>Reset Genre</button>
            </div>
        </div>
    );
};

export default GenreOptions;
