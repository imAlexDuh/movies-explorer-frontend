import FilterCheckbox from '../FilterCheckbox/FilterCheckBox.js';
import PropTypes from 'prop-types';
import './SearchForm.css';
import { useEffect, useState } from 'react';

export default function SearchForm({
  values, handleInputChange, isValid, setIsValid, onSubmitSearch,
}) {
  const [isError, setIsError] = useState(false);

  function handleSearch(evt) {
    evt.preventDefault();
    if (values.film !== '' && values.film !== undefined) {
      setIsError(false);
      onSubmitSearch(values);
    } else {
      setIsError(true);
    }
  }

  useEffect(() => {
    setIsValid(true);
  }, []);

  useEffect(() => {
    onSubmitSearch(values);
  }, [values.shorts]);

  return (
        <div className="search">
            <form className="search__container" onSubmit={handleSearch} >
                <div className="search__form" name="search-form" >
                    <input className="search__input" name="film" type="text" placeholder="Поиск" onChange={handleInputChange} value={values.film || ''} />
                    <button className="button search__button" type="submit" disabled={!isValid}>Найти</button>
                    <span className={`auth__error ${isError && 'auth__error_active'}`}>Нужно что-нибудь написать</span>
                </div>
                <FilterCheckbox onChange={handleInputChange} values={values} />
            </form>
        </div>
  );
}

SearchForm.propTypes = {
  values: PropTypes.object.isRequired,
  isValid: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  onSubmitSearch: PropTypes.func.isRequired,
  setIsValid: PropTypes.func.isRequired,
};
