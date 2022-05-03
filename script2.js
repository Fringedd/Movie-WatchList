'use strict';

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myMoviess'));
const leadsFromLocalStorageTwo = JSON.parse(localStorage.getItem('myMov'));
const data = document.getElementById('data');
const explore = document.getElementById('explore2');
let myLeadss = [];
let myMoviess = [];
let html1 = '';
let data1 = '';
let data3 = JSON.parse(localStorage.getItem('myMoviess'));
const className = document.getElementsByClassName('butts');

if (leadsFromLocalStorage) {
  myLeadss = leadsFromLocalStorage;
  localStorage.setItem('myMov', JSON.stringify(myLeadss));
}
console.log(typeof leadsFromLocalStorage);
window.onload = function () {
  if (!window.location.hash) {
    window.location = window.location + '#loaded';
    window.location.reload();
  }
};
if (leadsFromLocalStorage) {
  myMoviess = data3;
  /*for (let element of myMovies) {
    let splitty = element.split('*');
    let splitt2 = splitty[0].split('>');
    let splitty3 = splitt2[18].split(' ');
    console.log(splitty3);
    let splitty4 = splitty3[14].replace(`class=\"butts\"`, `class=\"butts2\"`);
    console.log(splitty4);
    */
  myMoviess.classlist;
  render(myMoviess);
}

if (myMoviess.length >= 1) {
  explore.classList.add('hidden');
} else {
  explore.classList.remove('hidden');
}

function render(leads) {
  data.innerHTML = leads;
}
let det = [];
function reply_click2(click_id) {
  myMoviess = data3;
  let arraycontainsturtles = myMoviess.findIndex(function (item) {
    return item.indexOf(click_id) !== -1;
  });
  console.log(arraycontainsturtles);
  if (myMoviess.length < 2) {
    myMoviess.pop();
  } else {
    switch (click_id) {
      case 'set-1':
        myMoviess.splice(arraycontainsturtles, 1);
        break;
      case 'set-2':
        myMoviess.splice(arraycontainsturtles, 1);
        break;
      case 'set-3':
        myMoviess.splice(arraycontainsturtles, 1);
        break;
      case 'set-4':
        myMoviess.splice(arraycontainsturtles, 1);
        break;
      case 'set-5':
        myMoviess.splice(arraycontainsturtles, 1);
        break;
      case 'set-6':
        myMoviess.splice(arraycontainsturtles, 1);
        break;
      case 'set-7':
        myMoviess.splice(arraycontainsturtles, 1);
        break;
      case 'set-8':
        myMoviess.splice(arraycontainsturtles, 1);
        break;
      case 'set-9':
        myMoviess.splice(arraycontainsturtles, 1);
        break;
      case 'set-10':
        myMoviess.splice(arraycontainsturtles, 1);
        break;
      default:
        console.log('1');
    }
  }

  localStorage.setItem('myMoviess', JSON.stringify(myMoviess));
  render(myMoviess);
}

var myarr = [
  'I',
  'like',
  `<div id="data1" class=".oneData">
<div id="left">
<img src="https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" id="img1" alt="" />
</div>
<div id="right">
<div class="right-contain">
  <div id="Tit-review">
    <p id="title">Batman: The Killing Joke</p>
    <img src="./images/star.svg" id="starry" alt="" />
    <p id="rating">6.4</p>
  </div>
  <div id="Genre-dur">
    <p id="duration"></p>
    <p id="genre">Animation, Action, Crime</p>
    <button id="set-1" class="butts2"  data-index=1></button>
  </div>
  <p id="summary-text">
    As Batman hunts for the escaped Joker, the Clown Prince of Crime attacks the Gordon family to prove a diabolical point mirroring his own fall into madness.
  </p>
</div>
</div>
</div>
<hr id="hr">`,
];
var arraycontainsturtles = myarr.findIndex(function (item) {
  return item.indexOf('set-1') !== -1;
});

console.log(arraycontainsturtles); // 2
