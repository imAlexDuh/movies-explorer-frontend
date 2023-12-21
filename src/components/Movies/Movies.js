import './Movies.css';
import SearchForm from '../SearchForm/SearchForm.js';
import Preloader from '../Preloader/Preloader.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

import { movies } from '../../utils/constants.js'
const moviesArray = []

export default function Movies({ isLoading }) {
    return (
        <main className="movies">
            <div className="movies__container">
                <SearchForm />
                {isLoading ? <Preloader /> : <MoviesCardList movies={movies} />}
            </div>
        </main>
    );
}