class api {
  constructor(url) {
    this.url = url;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`${res.status} - ${res.message}`);
    }
  }

  getSavedArticles(token) {
    return fetch(`${this.url}/articles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  deleteArticle(token, id) {
    return fetch(`${this.url}/articles/${id}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  saveCard(keyword, title, text, date, source, link, image, token) {
    return fetch(`${this.url}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ keyword, title, text, date, source, link, image }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  register(email, password, username) {
    return fetch(`${this.url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ email, password, name: username }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
  authorize(email, password) {
    return fetch(`${this.url}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        return this._checkResponse(res);
      })
      .then((data) => {
        if (!data.message) {
          localStorage.setItem("token", data.token);
          return data;
        } else {
          return;
        }
      });
  }
  checkToken(token) {
    return fetch(`${this.url}/users/me`, {
      method: "GET",
      headers: {
        Acccept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return this._checkResponse(res);
      })
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err));
  }
}

const mainApi = new api("https://api.ameer-news.students.nomoredomainssbs.ru");
export default mainApi;
