import { useEffect } from 'react';
import './Movies.css';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm.js';
import Preloader from '../Preloader/Preloader.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import useFormWithValidation from '../../hooks/useFormWithValidation';

export default function Movies({
  isLoading,
  setIsLoading,
  onClickLike,
  filteredMoviesList,
  filterMovieList,
  renderSavedMoviesIds,
  isRequestInfo,
  setIsRequestInfo,
  onSubmitSearch,
}) {
  const {
    values, setValues, isValid, setIsValid, handleInputChange,
  } = useFormWithValidation();

  useEffect(() => {
    setIsLoading(true);
    setIsRequestInfo({
      isOpen: false,
      success: true,
      text: '',
    });

    const filterMoviesParams = JSON.parse(localStorage.getItem('filterParams'));
    if (filterMoviesParams) {
      setValues(filterMoviesParams);
    }
    const filteredMoviesListFromLocalStorage = JSON.parse(localStorage.getItem('filteredMoviesList'));
    if (filteredMoviesListFromLocalStorage) {
      renderSavedMoviesIds(filteredMoviesListFromLocalStorage);
    } else if (filterMoviesParams) {
      filterMovieList();
    }
  }, []);

  return (
        <main className="movies">
            <div className="movies__container">
                <SearchForm
                    values={values}
                    handleInputChange={handleInputChange}
                    isValid={isValid}
                    setIsValid={setIsValid}
                    onSubmitSearch={onSubmitSearch}
                />
                {isLoading ? <Preloader /> : <MoviesCardList isRequestInfo={isRequestInfo} movies={filteredMoviesList} onClickLike={onClickLike} />}
            </div>
        </main>
  );
}

Movies.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  onSubmitSearch: PropTypes.func.isRequired,
  filteredMoviesList: PropTypes.array.isRequired,
  onClickLike: PropTypes.func.isRequired,
  filterMovieList: PropTypes.func.isRequired,
  renderSavedMoviesIds: PropTypes.func.isRequired,
  isRequestInfo: PropTypes.object.isRequired,
  setIsRequestInfo: PropTypes.func.isRequired,
};
