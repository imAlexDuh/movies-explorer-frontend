import './Promo.css';
import logotype from '../../images/promo-logo.svg';

export default function Promo() {
  return (
        <section className='promo'>
            <div className='promo__container'>
                <div className='promo__about'>
                    <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
                    <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <a className='promo__link button' target='_blank' rel="noreferrer" href='https://github.com/imAlexDuh'>Узнать больше</a>
                </div>
                <img className='promo__logotype' src={logotype} alt="картинка с web'ами" />
            </div>
        </section>
  );
}
