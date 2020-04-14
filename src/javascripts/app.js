import fetchCollected from './fetchCollected';
import copy from 'copy-to-clipboard';

const collectedWrapper = document.querySelector('.js-collected');
fetchCollected.then(collected => collectedWrapper.innerText = collected);

document.querySelectorAll('.js-ctc').forEach(item => {
  item.addEventListener('click', (elem) => {
    const number = elem.srcElement.dataset.ctc;
    changeNumberCtcNotif(number, 'No. rekening berhasil di-copy');
    copy(number);
    return true;
  })
});

function changeNumberCtcNotif(number, message) {
  const ctcNotifDom = document.querySelector(`.js-ctc-notif[data-ctc='${number}']`);
  const initMessage = ctcNotifDom.innerText;
  ctcNotifDom.innerText = message;
  window.setTimeout(() => {
    ctcNotifDom.innerText = initMessage;
  }, 3000);
  return true;
}
