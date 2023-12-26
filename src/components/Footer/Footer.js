import './Footer.css';
import { useLocation } from 'react-router-dom';

export default function Footer() {

    const footerEndpoints = ['/movies', '/saved-movies', '/'];
    const location = useLocation();

    if (footerEndpoints.includes(location.pathname))
        return (
            <footer className='footer'>
                <div className='footer__container'>
                    <h2 className='footer__subtitle'>Учебный проект Яндекс.Практикум Х BeatFilm.</h2>
                    <div className='footer__block'>
                        <p className='footer__year'>&copy; 2023</p>
                        <ul className='footer__list'>
                            <li className='footer__item'>
                                <a className='footer__link link' href='https://practicum.yandex.ru' target='_blank' rel="noreferrer">Яндекс.Практикум</a>
                            </li>
                            <li className='footer__item'>
                                <a className='footer__link link' href='https://github.com/imAlexDuh' target='_blank' rel="noreferrer">Github</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
}