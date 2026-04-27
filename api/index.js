const server = require('../dist/server/server.js')

module.exports = async (req, res) => {
  try {
    const response = await server.default.fetch(req.url, {
      method: req.method,
      headers: req.headers,
      body: req.body
    });
    
    res.status(response.status);
    
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    
    if (response.body) {
      response.body.pipe(res);
    } else {
      res.end(await response.text());
    }
  } catch (error) {
    console.error('Server function error:', error);
    res.status(500).send('Internal Server Error');
  }
}
