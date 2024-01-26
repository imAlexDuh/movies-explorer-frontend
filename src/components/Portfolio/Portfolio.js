import './Portfolio.css';
import arrow from '../../images/portf__item-icon.svg';

export default function Portfolio() {
  return (
        <section className='portf'>
            <div className='portf__container'>
                <h2 className='portf__subtitle'>Портфолио</h2>
                <ul className='portf__items'>

                    <li className='portf__item'>
                        <a className='portf__link link ' href="https://github.com/imAlexDuh/how-to-learn" target='_blank' rel="noreferrer">
                            Статичный сайт
                            <img className='portf__item-icon' src={arrow} alt='стрелка' />
                        </a>
                    </li>

                    <li className='portf__item'>
                        <a className='portf__link link ' href="https://github.com/imAlexDuh/russian-travel" target='_blank' rel="noreferrer">
                            Адаптивный сайт
                            <img className='portf__item-icon' src={arrow} alt='стрелка' />
                        </a>
                    </li>

                    <li className='portf__item'>
                        <a className='portf__link link' href="https://github.com/imAlexDuh/mesto" target='_blank' rel="noreferrer">
                            Одностраничное приложение
                            <img className='portf__item-icon' src={arrow} alt='стрелка' />
                        </a>
                    </li>

                </ul>
            </div>
        </section>
  );
}
