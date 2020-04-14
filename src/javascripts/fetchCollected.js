import Tabletop from 'tabletop';

const document = 'https://docs.google.com/spreadsheets/d/1_0Wsls-Slug75roxGIer1HcxnlR4y-jLJFZcgmBS50A/pubhtml';

const params = {
  key: document,
  simpleSheet: true,
};

export default Tabletop.init(params).then(resp => resp[0].total_donasi_terkumpul);
