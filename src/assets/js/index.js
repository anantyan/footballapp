import 'regenerator-runtime';
import Api from './api.js';
import Db from './db.js';
import { urlHttpToHttps } from './helper.js';
import './init.js';

document.addEventListener('DOMContentLoaded', () => {
  $('.sidenav').sidenav();
  $('#body-loader').hide();
  let page = window.location.hash.substr(1);
  let teams = '';
  let saveTeams = '';
  if (page === '') page = 'home';
  loadNav();
  loadPage(page);

  function loadPage(page) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = async function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          $('#body-content').html(xhttp.responseText);
          if (page === 'teams') {
            loadGetTeams('2002');
            loadSetSavedTeams();
            await $('#body-loader').hide();
          } else if (page === 'favorites') {
            loadGetSavedTeams();
            loadSetSavedFavorites();
            await $('#body-loader').hide();
          } else if (page === 'standings') {
            loadGetStandings('2002');
            await $('#body-loader').hide();
          } else {
            await $('#body-loader').hide();
          }
        } else if (this.status === 404) {
          $('#body-loader').hide();
          $('#body-content').html(`
          <div class="center-align" style="margin-top: 16px;">
            <img src="./assets/img/catpusheen_404.png" width="300" alt="About us">
            <h2>Not found! 404</h2>
            <p>Halaman tidak ditemukan.</p>
          </div>`);
        } else {
          $('#body-loader').hide();
          $('#body-content').html(`
          <div class="center-align" style="margin-top: 16px;">
            <img src="./assets/img/catpusheen_error.png" width="300" alt="About us">
            <h2>Cant be access!</h2>
            <p>Ups.. halaman tidak dapat diakses.</p>
          </div>`);
        }
      }
    };
    xhttp.open('GET', `pages/${page}.html`, true);
    xhttp.send();
  }

  function loadNav() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status !== 200) return;
        document.querySelectorAll('.topnav, .sidenav').forEach((elm) => {
          elm.innerHTML = this.responseText;
        });
        $('body').on('click', '.sidenav a, .topnav a', function () {
          $('.sidenav').sidenav('close');
          $('#body-loader').show();
          page = $(this).attr('href').substr(1);
          loadPage(page);
        });
      }
    };
    xhttp.open('GET', 'index-nav.html', true);
    xhttp.send();
  }

  async function loadGetTeams(id_leagues) {
    const success = await Api.getTeams(id_leagues);
    success.forEach(async (data) => {
      const item = await Db.getForLater(data.id);
      teams = `
      <li class="collection-item avatar valign-wrapper">
        <img src="${urlHttpToHttps(data.crestUrl)}" class="circle">
        <div>
          <span class="title">${data.shortName}</span>
          <p>${data.area.name}</p>
        </div>
        <a href="javascript:void(0);" class="secondary-content" id="idFavorite" data-id="${encodeURIComponent(JSON.stringify(data))}"><i class="material-icons">${item ? 'favorite' : 'favorite_border'}</i></a>
      </li>`;
      $('#teams-list').append(teams);
    });
  }

  async function loadGetStandings(id_leagues) {
    let item = '';
    const data = await Api.getStandings(id_leagues);
    data[0].table.forEach((i) => {
      item += `
      <tr>
        <th><img style="width: 42px; height: 42px;" src='${i.team.crestUrl}'></th>
        <th>${i.position}</th>
        <th>${i.points}</th>
        <th>${i.playedGames}</th>
        <th>${i.lost}</th>
        <th>${i.goalsFor}</th>
        <th>${i.goalsAgainst}</th>
        <th>${i.goalDifference}</th>
        <th>${i.draw}</th>
      </tr>`;
    });
    $('#standings-list').html(`
    <table class="striped">
      <thead>
        <tr class="indigo lighten-4">
          <th colspan="9" style="text-align: center;">Classmen Total</th>
        </tr>
        <tr>
          <th>Team</th>
          <th>Position</th>
          <th>P</th>
          <th>PG</th>
          <th>L</th>
          <th>GF</th>
          <th>GA</th>
          <th>GD</th>
          <th>D</th>
        </tr>
      </thead>
      <tbody>
        ${item}
      </tbody>
    </table>`);
  }

  async function loadGetSavedTeams() {
    const success = await Db.getAll();
    success.forEach((data) => {
      saveTeams = `
      <li class="collection-item avatar valign-wrapper">
        <img src="${urlHttpToHttps(data.crestUrl)}" class="circle">
        <div>
          <span class="title">${data.shortName}</span>
          <p>${data.area.name}</p>
        </div>
        <a href="javascript:void(0);" class="secondary-content" id="idSaveFavorite" data-id="${encodeURIComponent(JSON.stringify(data))}"><i class="material-icons">favorite</i></a>
      </li>`;
      $('#favorites-list').append(saveTeams);
    });
  }

  function loadSetSavedTeams() {
    $('body').on('click', '#idFavorite', async function () {
      const data = JSON.parse(decodeURIComponent($(this).data('id')));
      const success = await Db.getForLater(data.id);
      if (success === undefined) {
        Db.putForLater(data, data.id);
        $(this).find('i').html('favorite');
      } else {
        Db.removeForLater(data.id);
        $(this).find('i').html('favorite_border');
      }
    });
  }

  function loadSetSavedFavorites() {
    $('body').on('click', '#idSaveFavorite', async function () {
      const data = JSON.parse(decodeURIComponent($(this).data('id')));
      const success = await Db.getForLater(data.id);
      if (success === undefined) {
        Db.putForLater(data, data.id);
        $(this).find('i').html('favorite');
      } else {
        Db.removeForLater(data.id);
        $(this).find('i').html('favorite_border');
      }
    });
  }
});
