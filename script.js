'use strict';
const inputEl = document.getElementById('search-bar');
const searchEl = document.getElementById('search-but');
const explore = document.getElementById('explore');
let moviesArray = [];
let myMoviess = [];
let myLeads = [];
let html3 = '';
let html2 = '';
let count3 = 0;

const elements = document.getElementsByTagName('add-watch');
const cloSee = document.getElementsByClassName('butts');
function reply_click(click_id) {
  let data = JSON.parse(localStorage.getItem('myMoviess'));
  myMoviess = data;
  switch (click_id) {
    case '1':
      myMoviess.push(myLeads[0]);
      break;
    case '2':
      myMoviess.push(myLeads[1]);
      break;
    case '3':
      myMoviess.push(myLeads[2]);
      break;
    case '4':
      myMoviess.push(myLeads[3]);
      break;
    case '5':
      myMoviess.push(myLeads[4]);
      break;
    case '6':
      myMoviess.push(myLeads[5]);
      break;
    case '7':
      myMoviess.push(myLeads[6]);
      break;
    case '8':
      myMoviess.push(myLeads[7]);
      break;
    case '9':
      myMoviess.push(myLeads[8]);
      break;
    case '10':
      myMoviess.push(myLeads[9]);
      break;
  }
  localStorage.setItem('myMoviess', JSON.stringify(myMoviess));
}
let count = 1;
let count2 = 1;
function rendermoviesTwo(e) {
  document.getElementById('data').innerHTML = '';
  html2 = '';
  for (let movie of moviesArray) {
    fetch(
      `https://www.omdbapi.com/?t=${movie.Title}&page=2&apikey=c8b4f60e&plot`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        html2 += `<div id="data1" class=".oneData">
        <div id="left">
        <img src="${data.Poster}" id="img1" alt="" />
      </div>
      <div id="right">
        <div class="right-contain">
          <div id="Tit-review">
            <p id="title">${data.Title}</p>
            <img src="./images/star.svg" id="starry" alt="" />
            <p id="rating">${data.imdbRating}</p>
          </div>
          <div id="Genre-dur">
            <p id="duration"></p>
            <p id="genre">${data.Genre}</p>
            <button id="${count++}" class="butts" onClick="reply_click(this.id)"></button>
          </div>
          <p id="summary-text">
            ${data.Plot}
          </p>
        </div>
      </div>
      </div>
      <hr id="hr">*`;
        html3 += `<div id="data1" class="oneData">
        <div id="left">
        <img src="${data.Poster}" id="img1" alt="" />
      </div>
      <div id="right">
        <div class="right-contain">
          <div id="Tit-review">
            <p id="title">${data.Title}</p>
            <img src="./images/star.svg" id="starry" alt="" />
            <p id="rating">${data.imdbRating}</p>
          </div>
          <div id="Genre-dur">
            <p id="duration"></p>
            <p id="genre">${data.Genre}</p>
            <button id="set-${count2++}" class="butts2" onClick="reply_click2(this.id)"></button>
          </div>
          <p id="summary-text">
            ${data.Plot}
          </p>
        </div>
      </div>
      </div>
      <hr id="hr">*`;
        document.getElementById('data').innerHTML = html2;
        moviesArray.push(html2);
        myLeads = html3.split('*');
      });
  }
}

function renderMovies() {
  let html = '';
  for (let movie of moviesArray) {
    html += `
    <div id="data1" class=".oneData">
    <div id="left">
    <img src="${movie.Poster}" id="img1" alt="" />
  </div>
  <div id="right">
    <div class="right-contain">
      <div id="Tit-review">
        <p id="title">${movie.Title}</p>
        <img src="./images/star.svg" id="starry" alt="" />
        <p id="rating">8.1</p>
      </div>
      <div id="Genre-dur">
        <p id="duration"></p>
        <p id="genre">Action, Drama, Sci-fi</p>
        <button id="add-watch" class="butts"></button>
      </div>
      <p id="summary-text">
        A blade runner must pursue and terminate four replicants who
        stole a ship in space, and have returned to Earth to find
        their creator.
      </p>
    </div>
  </div>
  </div>
  <hr id="hr">`;
  }
}
const list = document.querySelector('.date');

function bringtoLife() {
  fetch(
    `https://www.omdbapi.com/?s=${inputEl.value}&page=2&apikey=c8b4f60e`
  ).then(response =>
    response.json().then(data => {
      console.log(data);

      if (data.Response === 'False') {
        explore.innerHTML = `<p class="unable">Unable to find what you re looking for. Please try another search.</p>`;
        explore.style.width = '400px';
        explore.classList.remove('hidden');
        document.getElementById('data').innerHTML = '';
      } else {
        moviesArray = data.Search.slice(0, 20);
        explore.classList.add('hidden');
        rendermoviesTwo();
        count = 1;
        count2 = 1;
        count3 = 1;
      }
    })
  );
}
searchEl.addEventListener('click', bringtoLife);

/*
function Hidee(ev) {
  if (ev.target.tagName === 'BUTTON') {
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    console.log(myLeads);
  }
  list.addEventListener('click', Hidee);
}
*/
