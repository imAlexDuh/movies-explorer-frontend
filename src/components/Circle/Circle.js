import './Circle.css';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Circle({ isCircleOpened, handleCircleClick }) {
    const isMobile = useMediaQuery({ query: `(max-width: 900px)` });

    function handleOnClickCircle() {
        handleCircleClick();
    };

    useEffect(() => {
        if (!isMobile && isCircleOpened) {
            handleCircleClick();
        }
    }, [isCircleOpened, isMobile, handleCircleClick]);

    return (
        <button
            type="button"
            className={`link circle-button circle-button_${isCircleOpened ? 'on' : 'off'
                } ${useLocation().pathname === '/' && 'circle-button_light'
                }`}
            onClick={handleOnClickCircle}
        >
            <span></span>
        </button>
    );
}