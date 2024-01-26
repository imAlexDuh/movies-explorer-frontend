import './Techs.css';

export default function Techs() {
  return (
        <section className='tech'>
            <div className='tech__container'>
                <h2 className='tech__title'>Технологии</h2>
                <h3 className='tech__subtitle'>7 технологий</h3>
                <p className='tech__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className='tech__subjects'>
                    <li className='tech__subject'>HTML</li>
                    <li className='tech__subject'>CSS</li>
                    <li className='tech__subject'>JS</li>
                    <li className='tech__subject'>React</li>
                    <li className='tech__subject'>Git</li>
                    <li className='tech__subject'>Express.js</li>
                    <li className='tech__subject'>mongoDB</li>
                </ul>
            </div>
        </section>
  );
}
