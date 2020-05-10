import cors from './_middleware/cors';
import Tabletop from 'tabletop';

const document = 'https://docs.google.com/spreadsheets/d/1_0Wsls-Slug75roxGIer1HcxnlR4y-jLJFZcgmBS50A/pubhtml';

const params = {
  key: document,
  simpleSheet: true,
};

async function collected(req, res) {
  cors(req, res);

  const collected = await Tabletop.init(params).then(resp => resp[0].total_donasi_terkumpul);
  return res.json(collected);
};

export default collected;
