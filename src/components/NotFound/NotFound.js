import './NotFound.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {

  return (
    <main className="main">
      <section className="not-found">
        <div className="not-found__info">
          <h2 className="not-found__title">404</h2>
          <p className="not-found__text">Страница не найдена</p>
        </div>
        <Link to="/" className="link not-found__link">
          Назад
        </Link>
      </section>
    </main>
  );
}