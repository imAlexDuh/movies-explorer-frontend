import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function MoviesCard({ movie, onClickLike }) {
  const page = useLocation().pathname;
  let defaultIsLiked;

  if (page === '/saved-movies') {
    defaultIsLiked = true;
  } else if (page === '/movies' && movie._id !== undefined) {
    defaultIsLiked = true;
  } else {
    defaultIsLiked = false;
  }

  const [isLiked, setIsLiked] = useState(defaultIsLiked);

  const buttonClassName = `movie__button ${!isLiked ? 'movie__button_type_not-saved' : ''} ${(
    isLiked && page === '/saved-movies') ? 'movie__button_type_delete' : ''} ${(
    isLiked && page === '/movies') ? 'movie__button_type_saved' : ''}`;

  function handleClickLike(evt) {
    evt.stopPropagation();
    onClickLike(movie, isLiked, setIsLiked);
  }

  function countDuration(duration) {
    const hours = Math.trunc(duration / 60);
    const minutes = duration % 60;
    if (hours === 0) {
      return `${minutes}м`;
    }
    return `${hours}ч ${minutes}м`;
  }

  return (
        <div className="movie">
            <a className="movie__trailer" href={movie.trailerLink}>
                <img className="movie__img" src={typeof movie.image === 'string' ? movie.image : `https://api.nomoreparties.co${movie.image.url}`} alt={movie.nameRU} />
                <div className="movie__info">
                    <div className='movie__description'>
                        <h2 className='movie__title'>{movie.nameRU}</h2>
                    </div>
                    <span className="movie__duration">{countDuration(movie.duration)}</span>
                </div>
            </a>
            <button
                className={buttonClassName}
                onClick={handleClickLike}
            ></button>
        </div>
  );
}

MoviesCard.propTypes = {
  movie: PropTypes.object,
  onClickLike: PropTypes.func.isRequired,
};
