class newsApi {
  constructor(api, key) {
    this.key = key;
    this.api = api;
    this.from = this.getTimeAWeekAgo();
    this.to = this.getCurrentTime();
    this.pageSize = 100;
  }

  getArticles(q) {
    return fetch(
      `${this.api}?q=${q}&from=${this.from}&pageSize=${this.pageSize}&to=${this.to}&apiKey=${this.key}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch((err) => console.log(err));
  }

  getCurrentTime() {
    const to = new Date(Date.now());
    const days = to.getDate();
    const years = to.getFullYear();
    const months = to.getMonth() + 1;
    return `${years}-${months < 10 ? `0${months}` : months}-${
      days < 10 ? `0${days}` : days
    }`;
  }

  getTimeAWeekAgo() {
    const from = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const days = from.getDate();
    const years = from.getFullYear();
    const months = from.getMonth() + 1;
    return `${years}-${months < 10 ? `0${months}` : months}-${
      days < 10 ? `0${days}` : days
    }`;
  }
}

const api = new newsApi(
  "https://newsapi.org/v2/everything",
  "303f113ec1d0439d853633e27d22a610"
);
export default api;
