import './css/styles.css';

const input = document.querySelector('#search-box');
const countryCard = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

const countriesUrl =
  'https://restcountries.com/v2/name/peru?fields=name.official,capital,population,flags.svg,languages';

input.addEventListener('input', onInput);

function onInput(e) {
  const countryEl = e.currentTarget.value;
}

fetch(countriesUrl)
  .then(responsive => responsive.json())
  .then(country => {
    console.log(country);
  })
  .catch(error => {
    console.log(error);
  });
