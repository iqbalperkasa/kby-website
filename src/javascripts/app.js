import ClipboardJS from 'clipboard';

const collectedDom = document.querySelector('.js-collected');
let lastCollected = window.localStorage.getItem('last_collected');

if (lastCollected) {
  collectedDom.innerText = lastCollected;
}

fetch('https://kby-api.now.sh/api/collected')
  .then(resp => resp.json())
  .then(collected => {
    collectedDom.innerText = collected
    window.localStorage.setItem('last_collected', collected);
  });

new ClipboardJS('.js-ctc');

if (!ClipboardJS.isSupported()) {
  document.querySelectorAll('.js-ctc-notif').forEach(item => item.classList.add('display-none'));
}

document.querySelectorAll('.js-ctc').forEach(item => {
  item.addEventListener('click', (elem) => {
    const number = elem.srcElement.dataset.clipboardText;
    changeNumberCtcNotif(number, 'No. rekening berhasil di-copy');
    return true;
  })
});

function changeNumberCtcNotif(number, message) {
  const ctcNotifDom = document.querySelector(`.js-ctc-notif[data-ctc='${number}']`);
  const initMessage = ctcNotifDom.innerText;
  ctcNotifDom.innerText = message;
  window.setTimeout(() => {
    ctcNotifDom.innerText = initMessage;
  }, 2000);
  return true;
}
