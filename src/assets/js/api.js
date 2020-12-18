const options = {
  method: 'GET',
  headers: {
    'X-Auth-Token': '7fb7fc05ddc14156b0392c1562e6dc22',
  },
};

class Api {
  static get BASE_URL() {
    return 'https://api.football-data.org/v2/';
  }

  static async getStandings(id_leagues) {
    if ('caches' in window) {
      const response = await caches.match(`${this.BASE_URL}competitions/${id_leagues}/standings`);
      if (response) {
        response.json().then((data) => Promise.resolve(data.result));
      }
    }

    try {
      const response = await fetch(`${this.BASE_URL}competitions/${id_leagues}/standings`, options);
      const data = await response.json();
      return Promise.resolve(data.standings);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async getTeams(id_leagues) {
    if ('caches' in window) {
      const response = await caches.match(`${this.BASE_URL}competitions/${id_leagues}/teams`);
      if (response) {
        response.json().then((data) => Promise.resolve(data.result));
      }
    }

    try {
      const response = await fetch(`${this.BASE_URL}competitions/${id_leagues}/teams`, options);
      const data = await response.json();
      return Promise.resolve(data.teams);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default Api;
