import './MoviesCard.css';
import { useLocation } from 'react-router-dom';


export default function MoviesCard({ movie }) {

    const location = useLocation();

    return (
        <div className="movie">
            <img className="movie__img" src={movie.image} alt={movie.name} />
            <div className="movie__info">
                <div className='movie__description'>
                    <p className='movie__title'>{movie.name}</p>
                    {movie.isSaved ? (
                        <button className={`button movie__button 
              ${location.pathname === '/saved-movies' ? 'movie__button_type_delete' : 'movie__button_type_saved'}`}></button>
                    ) :
                        (
                            <button className='button movie__button movie__button_type_not-saved'></button>
                        )}
                </div>
                <span className="movie__duration">{movie.duration}</span>
            </div>
        </div>
    )
}