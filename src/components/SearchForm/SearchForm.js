import FilterCheckbox from '../FilterCheckbox/FilterCheckBox.js';
import './SearchForm.css';

export default function SearchForm() {
    return (
        <div className="search">
            <form className="search__container">
                <form className="search__form">
                    <input className="search__input" type="text" placeholder="Фильм" required />
                    <button className="button search__button" type="submit">Найти</button>
                </form>
                <FilterCheckbox />
            </form>
        </div>
    )
}