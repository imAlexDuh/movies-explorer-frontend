import { useMediaQuery } from 'react-responsive';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList({ cards, isLoading }) {
    const showCards = useMediaQuery({ query: `(max-width: 880px)` }) ? 5 : 8;

    return (
        <div className="section movies">
            <div className='section__container movies__container'>
                {cards.length === 0 &&
                    (
                        <p className="searching__error">Не найдено</p>
                    )
                }
                <ul className='movies__items'>
                    {cards.slice(0, showCards).map((card, index) => (
                        <li key={`card${index + 1}`} className='movies__item'>
                            <MoviesCard className="card" card={card} />
                        </li>
                    ))}
                </ul>
                {cards.length > showCards ? (
                    <button className="button movies__button">
                        Ещё
                    </button>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}