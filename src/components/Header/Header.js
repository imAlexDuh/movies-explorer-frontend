import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logotype.svg';

export default function Header({ loggedIn, handleCircleClick, isCircleOpened }) {

    const headerEndpoints = ['/movies', '/saved-movies', '/profile', '/'];
    const location = useLocation();

    if (headerEndpoints.includes(location.pathname))
        return (
            <header
                className={`header ${location.pathname === '/' && 'header_theme_dark'
                    }`}>
                <div className='header__container'>
                    <Link to='/' className='logo link'>
                        <img src={logo} alt="лого" />
                    </Link>
                    <Navigation
                        loggedIn={loggedIn}
                        handleCircleClick={handleCircleClick}
                        isCircleOpened={isCircleOpened}
                    />
                </div>
            </header>
        )
    else
        return ('');
}