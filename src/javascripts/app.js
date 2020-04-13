import fetchCollected from './fetchCollected';

const collectedWrapper = document.querySelector('.js-collected');
fetchCollected.then(collected => collectedWrapper.innerText = collected);
