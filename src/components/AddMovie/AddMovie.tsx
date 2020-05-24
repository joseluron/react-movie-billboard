import React, { useState } from 'react';

import './AddMovie.scss';

interface IAddMovieProps {
    addNewMovie: Function
}

const AddMovie = (props: IAddMovieProps) => {
    const [toAddMovieTitle, setMovieTitle] = useState('');
    const [toAddMovieGenres, setMovieGenres] = useState(new Array<string>());
    const [toAddMovieGenre, setMovieGenre] = useState('');

    const { addNewMovie } = props;
    
    const addNewGenre = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if (toAddMovieGenre !== '') {
                const lowMovieGenre = toAddMovieGenre.toLowerCase();
                if (!toAddMovieGenres.includes(lowMovieGenre)) {
                    setMovieGenres([...toAddMovieGenres, lowMovieGenre]);
                }
                setMovieGenre('');
            }
        }
    };

    const addMovie = () => {
        if (toAddMovieTitle && (toAddMovieGenres.length > 0)) {
            const toAddMovieData = {
                movieTitle: toAddMovieTitle,
                movieGenres: toAddMovieGenres
            };
            setMovieTitle('');
            setMovieGenres(new Array<string>());

            addNewMovie(toAddMovieData);
        }
    }
    
    return (
        <div className="add-movie-container">
            <div className="add-movie-wrapper">
                <div className="inputs-family">
                    <div className="movie-title input-combo">
                        <span>Title: </span>
                        <input type="text" placeholder="Movie title" value={toAddMovieTitle} onChange={e => setMovieTitle(e.target.value)} />
                    </div>
                    <div className="movie-genre input-combo">
                        <span>Genre(s): </span>
                        <input type="text" placeholder="Movie genre" value={toAddMovieGenre} onChange={e => setMovieGenre(e.target.value)} onKeyDown={e => addNewGenre(e)}/>
                    </div>
                    <div className="added-genres">
                        {toAddMovieGenres.map(genre => <span key={genre}>{`#${genre}`}</span>)}
                    </div>
                    <button className="add-button" onClick={addMovie}>Add New Movie</button>
                </div>
            </div>
        </div>
    );
}

export default AddMovie;
