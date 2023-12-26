import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { movies } from '../../utils/constants'
const moviesArray = []

export default function SavedMovies({ isLoading }) {
  return (
    <main className="movies">
      <div className="movies__container">
        <SearchForm />
        {isLoading ? <Preloader /> : <MoviesCardList movies={movies.filter((movie) => movie.isSaved)} />}
      </div>
    </main>
  );
}