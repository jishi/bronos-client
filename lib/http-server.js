const http = require('http');
const path = require('path');
const StaticServer = require('node-static').Server;
const config = require('./config');

let server;
const publicContent = new StaticServer(path.join(__dirname, '../public'));

async function listen(...args) {
  return new Promise((resolve) => {
    server.listen(...args, () => {
      resolve();
    });
  });
}

function listener(req, res) {
  if (req.method === 'GET' && req.url === '/token') {
    res.setHeader('Content-type', 'text/plain');
    res.end(config.token);
    return;
  }

  req.addListener('end', () => {
    publicContent.serve(req, res);
  }).resume();
}

module.exports = {
  async start() {
    server = http.createServer(listener);
    await listen(config.httpPort);
  },
  stop() {
    return new Promise((resolve, reject) => {
      server.close((err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  },
};
