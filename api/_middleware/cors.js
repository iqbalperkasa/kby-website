const allowedHosts = [
  'http(s?)://localhost.*',
  'https://kby-website-.+.now.sh',
  'https://kitaberbagiyuk.now.sh',
  'https://www.kitaberbagiyuk.com',
  'https://kitaberbagiyuk.com',
];

function setCorsHeaders(req, res) {
  if (!req.headers.origin) {
    res.setHeader('Access-Control-Allow-Origin', '*');
  } else {
    allowedHosts.forEach(host => {
      if (req.headers.origin.match(host)) {
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
      }
    });
  }
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

module.exports = setCorsHeaders;
