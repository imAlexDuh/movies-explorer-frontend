import './Profile.css';
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Profile() {


    const currentUser = React.useContext(CurrentUserContext);
    return (
        <main className="profile">
            <div className='profile__container'>
                <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
                <form name="profile" className='form form_place_profile'>
                    <div className='form__fieldset'>
                        <label className='form__field field'>
                            Имя
                            <input
                                className='form__input form__input_place_profile form__input_type_name'
                                name="name"
                                id="name"
                                type="text"
                                required
                                minLength="2"
                                maxLength="40"
                                value={currentUser.name}
                            >
                            </input>
                        </label>
                        <label className='form__field field field_type_last'>
                            E-mail
                            <input
                                className='form__input form__input_place_profile form__input_type_email'
                                name="email"
                                id="email"
                                type="email"
                                required
                                value={currentUser.email}
                            >
                            </input>
                        </label>
                    </div>
                    <ul className="buttons buttons_place_profile">
                        <li className='buttons__item'>
                            <button
                                type="submit"
                                className={`button form__button`}
                            >
                                Редактировать
                            </button>
                        </li>
                        <li className='buttons__item'>
                            <button
                                type="submit"
                                className="button form__button form__button_type_logout"
                            >
                                Выйти из аккаунта
                            </button>
                        </li>
                    </ul>
                </form>
            </div>
        </main>
    );
}