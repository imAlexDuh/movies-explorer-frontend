import './AboutMe.css';
import pic from '../../images/pic.jpg';

export default function AboutMe() {
    return (
        <section className='section about-me'>
            <div className='section__container about-me__container'>
                <h2 className='section__title'>Студент</h2>
                <div className='about-me__info'>
                    <div className='about-me__text'>
                        <div>
                            <h3 className='about-me__subtitle'>Виталий</h3>
                            <p className='about-me__job'>Фронтенд-разработчик, 30 лет</p>
                            <p className='about-me__info'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                                и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                        </div>
                        <a className='link about-me__link' href="https://github.com/imAlexDuh" target='_blank' rel="noreferrer">Github</a>
                    </div>
                    <img className='about-me__pic' src={pic} alt='фото' />
                </div>
            </div>
        </section>
    )
}