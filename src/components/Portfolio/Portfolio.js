import './Portfolio.css';
import arrow from '../../images/portf__item-icon.svg';

export default function Portfolio() {
    return (
        <section className='section portf'>
            <div className='section__container portf__container'>
                <h2 className='portf__subtitle'>Портфолио</h2>
                <ul className='portf__items'>

                    <li className='portf__item'>
                        <a className='link portf__link' href="https://github.com/imAlexDuh" target='_blank' rel="noreferrer">
                            Статичный сайт
                            <img className='portf__item-icon' src={arrow} alt='стрелка' />
                        </a>
                    </li>

                    <li className='portf__item'>
                        <a className='link portf__link' href="https://github.com/imAlexDuh" target='_blank' rel="noreferrer">
                            Адаптивный сайт
                            <img className='portf__item-icon' src={arrow} alt='стрелка' />
                        </a>
                    </li>

                    <li className='portfolio__item'>
                        <a className='portfolio__link link' href="https://github.com/imAlexDuh" target='_blank' rel="noreferrer">
                            Одностраничное приложение
                            <img className='portf__item-icon' src={arrow} alt='стрелка' />
                        </a>
                    </li>

                </ul>
            </div>
        </section>
    )
}