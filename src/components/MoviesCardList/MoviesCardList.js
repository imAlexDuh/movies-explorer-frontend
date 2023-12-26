import { useMediaQuery } from 'react-responsive';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList({ movies, isLoading }) {

    const showMovies = useMediaQuery({ query: `(max-width: 900px)` }) ? 5 : 16;

    return (
        <div className="movies__section">
            <div className='movies__list'>
                {movies.length === 0 &&
                    (
                        <p className="searching__error">Не найдено</p>
                    )
                }
                <ul className='movies__items'>
                    {movies.slice(0, showMovies).map((movie, index) => (
                        <li key={`card${index + 1}`} className='movies__item'>
                            <MoviesCard className="movieCard" movie={movie} />
                        </li>
                    ))}
                </ul>
                {movies.length > showMovies ? (
                    <button className="button movies__button">Ещё</button>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}