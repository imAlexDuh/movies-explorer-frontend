import { useState, useEffect } from 'react';
import './MoviesCardList.css';
import PropTypes from 'prop-types';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ isRequestInfo, movies, onClickLike }) {
  const [showMovies, setShowMovies] = useState(12);
  const [addMovies, setAddMovies] = useState(3);

  function countShowMovies() {
    const width = window.innerWidth;
    if (width >= 1280 && location.pathname === "/movies") {
      setShowMovies(16);
      setAddMovies(4);
    } else if (width >= 950 && location.pathname === "/movies") {
      setShowMovies(12);
      setAddMovies(3);
    } else if (width >= 660 && location.pathname === "/movies") {
      setShowMovies(8);
      setAddMovies(2);
    } else if (location.pathname === "/saved-movies") {
      setShowMovies(100);
    }
  }

  useEffect(() => {
    countShowMovies();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('resize', countShowMovies);
    }, 1000);
  });

  function handleClickShowMore() {
    setShowMovies(showMovies + addMovies);
  }

  return (
    <div className="movies__section">
      <div className='movies__list'>
        <p className={`search__error ${isRequestInfo.isOpen && 'search__error_active'}`}>{isRequestInfo.text}</p>
        <ul className='movies__items'>
          {movies.slice(0, showMovies).map((movie) => (
            <li key={movie._id ?? movie.id} className='movies__item'>
              <MoviesCard className="movieCard" movie={movie} onClickLike={onClickLike} />
            </li>
          ))}
        </ul>
        {location.pathname === "/movies" && movies.length > showMovies ? (
          <button type="button" className="button movies__button" onClick={handleClickShowMore} >Ещё</button>
        ) : ('')}
      </div>
    </div>
  );
}

MoviesCardList.propTypes = {
  isRequestInfo: PropTypes.object.isRequired,
  movies: PropTypes.array,
  onClickLike: PropTypes.func.isRequired,
};
