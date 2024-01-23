class Api {
  constructor({ baseUrl, credentials, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._credentials = credentials;
  }

  async _handleResponse(res) {
    const result = await res.json();
    return res.ok ? result : Promise.reject(result.message);
  }

  _handleRequest(url, {
    method, credentials, headers, body,
  }) {
    return fetch(`${this._baseUrl}${url}`, {
      method,
      credentials,
      headers,
      body,
    })
      .then(this._handleResponse);
  }

  register({ name, password, email }) {
    return this._handleRequest('/signup', {
      method: 'POST', credentials: this._credentials, headers: this._headers, body: JSON.stringify({ name, password, email }),
    });
  }

  login({ password, email }) {
    return this._handleRequest('/signin', {
      method: 'POST', credentials: this._credentials, headers: this._headers, body: JSON.stringify({ password, email }),
    })
      .then((res) => { localStorage.setItem('token', res.token); });
  }

  checkToken(jwt) {
    return this._handleRequest('/users/me', { method: 'GET', credentials: this._credentials, headers: { ...this._headers, Authorization: `Bearer ${jwt}` } });
  }

  getUserInfo(jwt) {
    return this._handleRequest('/users/me', { method: 'GET', credentials: this._credentials, headers: { ...this._headers, Authorization: `Bearer ${jwt}` } });
  }

  sendUserInfo({ name, email }, jwt) {
    return this._handleRequest('/users/me', {
      method: 'PATCH', credentials: this._credentials, headers: { ...this._headers, Authorization: `Bearer ${jwt}` }, body: JSON.stringify({ name, email }),
    });
  }

  getSavedMovies(jwt) {
    return this._handleRequest(
      '/movies',
      {
        method: 'GET',
        credentials: this._credentials,
        headers: {
          ...this._headers,
          Authorization: `Bearer ${jwt}`,
        },
      },
    )
      .then((res) => res.movies);
  }

  postSavedMovie(movie, jwt) {
    return this._handleRequest(
      '/movies',
      {
        method: 'POST',
        credentials: this._credentials,
        headers: {
          ...this._headers,
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({
          country: movie.country,
          director: movie.director,
          year: movie.year,
          duration: movie.duration,
          description: movie.description,
          image: `https://api.nomoreparties.co${movie.image.url}`,
          trailerLink: movie.trailerLink,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
          thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
          movieId: movie.id,
        }),
      },
    );
  }

  deleteSavedMovie(movieId, jwt) {
    return this._handleRequest(
      `/movies/${movieId}`,
      {
        method: 'DELETE',
        credentials: this._credentials,
        headers: {
          ...this._headers,
          Authorization: `Bearer ${jwt}`,
        },
      },
    );
  }
}

const api = new Api({
  baseUrl: 'https://api.imalexdudie.nomoredomainsmonster.ru',
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export { api, Api };
