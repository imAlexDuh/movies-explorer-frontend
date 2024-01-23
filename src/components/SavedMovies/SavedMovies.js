import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import PropTypes from 'prop-types';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import { useEffect } from 'react';

export default function SavedMovies({ isLoading, onClickLike, isRequestInfo, setIsRequestInfo, savedMoviesList, filterSavedMovies }) {

  const { values, isValid, setIsValid, handleInputChange } = useFormWithValidation();

  useEffect(() => {
    setIsRequestInfo({
      isOpen: false,
      success: true,
      text: ''
    });
    filterSavedMovies(values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (savedMoviesList.length === 0) {
      if (values.film === "" || values.film === undefined) {
        setIsRequestInfo({
          isOpen: true,
          success: false,
          text: 'Вы еще не сохранили ни одного фильма.'
        });
      } else {
        setIsRequestInfo({
          isOpen: true,
          success: false,
          text: 'Ничего не найдено.'
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedMoviesList]);

  return (
    <main className="movies">
      <div className="movies__container">
        <SearchForm
          values={values}
          handleInputChange={handleInputChange}
          isValid={isValid}
          setIsValid={setIsValid}
          onSubmitSearch={filterSavedMovies}
        />
        {isLoading ? <Preloader /> : <MoviesCardList isRequestInfo={isRequestInfo} movies={savedMoviesList} onClickLike={onClickLike} />}
      </div>
    </main>
  );
}

SavedMovies.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onClickLike: PropTypes.func.isRequired,
  isRequestInfo: PropTypes.object.isRequired,
  setIsRequestInfo: PropTypes.func.isRequired,
  savedMoviesList: PropTypes.array.isRequired,
  filterSavedMovies: PropTypes.func.isRequired,
}