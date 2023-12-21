import './AboutProject.css';

export default function AboutProject() {
    return (
        <section className='about'>
            <div className='about__container'>
                <h2 className='about__title'>О проекте</h2>

                <div className='about__texts'>

                    <div className='about__text'>
                        <h3 className='about__subtitle'>Дипломный проект включал 5 этапов</h3>
                        <p className='about__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className='about__text'>
                        <h3 className='about__subtitle'>На выполнение диплома ушло 5 недель</h3>
                        <p className='about__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>

                </div>

                <div className='timeline'>
                    <p className='timeline__line timeline__top timeline__one'>1 неделя</p>
                    <p className='timeline__line timeline__top timeline__four'>4 недели</p>
                    <p className='timeline__line timeline__bottom timeline__backend'>Back-end</p>
                    <p className='timeline__line timeline__bottom timeline__frontend'>Front-end</p>
                </div>

            </div>
        </section>
    )
}