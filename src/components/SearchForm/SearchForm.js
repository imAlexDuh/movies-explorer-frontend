import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export default function SearchForm() {
    return (
        <div className="section search">
            <div className="search__container section__container">
                <form className="search__form">
                    <input className="search__input" type="text" placeholder="Фильм" required />
                    <button className="button search__button" type="submit"></button>
                </form>
                <FilterCheckbox />
            </div>
        </div>
    )
}