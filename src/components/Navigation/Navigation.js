import './Navigation.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Circle from '../Circle/Circle';

export default function Navigation({ loggedIn, handleCircleClick, isCircleOpened }) {

    const location = useLocation();
    const isMobile = useMediaQuery({ query: `(max-width: 900px)` });
    const accountTheme = `navigation__account_theme_${location.pathname !== '/' || isMobile ? 'light' : 'green'}`;
    const activeLink = `navigation__link_active_${isCircleOpened ? 'mobile' : 'desktop'}`;

    function handleClickOverlay(e) {
        e.stopPropagation();
    }

    return (
        <>
            {!loggedIn ? (
                <nav className="navigation">
                    <ul className="navigation__list navigation__list_type_auth">
                        <li>
                            <Link to='/signup' className='link navigation__link navigation__link_type_auth'>
                                Регистрация
                            </Link>
                        </li>
                        <li>
                            <Link to='/signin' className='link navigation__link navigation__link_type_auth navigation__link_type_signin'>
                                Войти
                            </Link>
                        </li>
                    </ul>
                </nav>
            ) : (
                <nav className={`navigation navigation_state_${isCircleOpened ? 'opened' : 'closed'}`} onClick={isCircleOpened ? handleCircleClick : undefined}>
                    <Circle isCircleOpened={isCircleOpened} handleCircleClick={handleCircleClick} />
                    <ul className={`navigation__list navigation__list_logged navigation__list_state_${isCircleOpened ? 'opened' : 'closed'}`} onClick={handleClickOverlay}>
                        <ul className="navigation__links">
                            {isCircleOpened && (
                                <li className="navigation__item">
                                    <NavLink to='/' className={({ isActive }) => isActive ? 'navigation__link link ' + activeLink : 'navigation__link link'}>
                                        Главная
                                    </NavLink>
                                </li>
                            )}
                            <li className="navigation__item">
                                <NavLink to='/movies' className={({ isActive }) => isActive ? 'navigation__link link ' + activeLink : 'navigation__link link'}>
                                    Фильмы
                                </NavLink>
                            </li>
                            <li className="navigation__item">
                                <NavLink to='/saved-movies' className={({ isActive }) => isActive ? 'navigation__link link ' + activeLink : 'navigation__link link'}>
                                    Сохранённые фильмы
                                </NavLink>
                            </li>
                        </ul>
                        <li className="navigation__item">
                            <Link className={`navigation__account ${accountTheme} link`} to='/profile'>
                                <span>Аккаунт</span>
                                <div className='account-icon' />
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
}