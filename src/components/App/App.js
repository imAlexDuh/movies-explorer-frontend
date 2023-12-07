import React from 'react';
import './App.css';

import { Route, Navigate, Routes } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login'
import Register from '../Register/Register'
import Profile from '../Profile/Profile'
import NotFound from '../NotFound/NotFound'


export default function App() {
  const [currentUser, setCurrentUser] = React.useState({
    name: 'Виталий',
    email: 'mail@mail.ru'
  });

  const [isCircleOpened, setIsCircleOpened] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  function handleCircleClick() {
    setIsCircleOpened(!isCircleOpened);
  }

  return (
    <div className="app">
      {
        (
          <CurrentUserContext.Provider value={currentUser}>
            <Header
              loggedIn={isLoggedIn}
              handleCircleClick={handleCircleClick}
              isCircleOpened={isCircleOpened}
            />
            <Routes>
              <Route exact path='/' element={<Main />} />

              <Route path="/signup" element={!isLoggedIn ? <Register /> : <Navigate to="/" />} />
              <Route path="/signin" element={!isLoggedIn ? <Login /> : <Navigate to="/" />} />

              <Route path="/movies" element={<Movies />} />
              <Route path="/saved-movies" element={<SavedMovies />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/404" element={<NotFound />} > </Route>

            </Routes>
            <Footer />
          </CurrentUserContext.Provider>
        )}
    </div>
  );
}