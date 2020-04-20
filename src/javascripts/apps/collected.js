const BASE_URL = 'https://kitaberbagiyuk.now.sh';
const BASE_URL_DEV = 'http://localhost:3000';

const collectedDom = document.querySelector('.js-collected');
let lastCollected = window.localStorage.getItem('last_collected');

if (lastCollected && collectedDom) {
  collectedDom.innerText = lastCollected;
}

function getApiUrl() {
  switch (process.env.NODE_ENV) {
    case 'development':
      return `${BASE_URL_DEV}/api`;
    default:
      return `${BASE_URL}/api`;
  }
}

fetch(`${getApiUrl()}/collected`)
  .then(resp => resp.json())
  .then(collected => {
    collectedDom.innerText = collected
    window.localStorage.setItem('last_collected', collected);
  });
