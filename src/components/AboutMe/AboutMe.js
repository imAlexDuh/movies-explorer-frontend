import './AboutMe.css';
import pic from '../../images/pic.jpg';

export default function AboutMe() {
    return (
        <section className='about-me'>
            <div className='about-me__container'>
                <h2 className='about-me__title'>Студент</h2>
                <div className='about-me__card'>
                    <div className='about-me__text'>
                        <div>
                            <h3 className='about-me__name'>Виталий</h3>
                            <p className='about-me__job'>Фронтенд-разработчик, 30 лет</p>
                            <p className='about-me__about'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                                и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
                                После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                        </div>
                        <a className='about-me__link link' href="https://github.com/imAlexDuh" target='_blank' rel="noreferrer">Github</a>
                    </div>
                    <img className='about-me__pic' src={pic} alt='фото' />
                </div>
            </div>
        </section>
    );
}
