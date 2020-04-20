const cors = require('./_middleware/cors');
const Tabletop = require('tabletop');

const document = 'https://docs.google.com/spreadsheets/d/1_0Wsls-Slug75roxGIer1HcxnlR4y-jLJFZcgmBS50A/pubhtml';

const params = {
  key: document,
  simpleSheet: true,
};

module.exports = async (req, res) => {
  cors(req, res);

  const given = await Tabletop.init(params).then(resp => resp[0].total_donasi_tersalur);
  return res.json(given);
};
