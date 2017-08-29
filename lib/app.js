const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const io = require('socket.io-client');
const config = require('./config');
const logger = require('./logger');

let socket;

function readOrCreateToken() {
  const tokenFilePath = path.join(__dirname, '../token.txt');
  try {
    const token = fs.readFileSync(tokenFilePath).toString();
    return token;
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }

    const token = crypto.randomBytes(24).toString('hex');
    fs.writeFileSync(tokenFilePath, token);
    return token;
  }
}

module.exports = {
  async start() {
    const token = readOrCreateToken();
    logger.info(`Token is ${token}, now connecting to https://broker.bronos.net`);
    return new Promise((resolve, reject) => {
      socket = io('https://broker.bronos.net/', {
        transports: ['websocket'],
        query: { token },
      });

      socket.on('connect', () => {
        logger.info('connected');
        resolve(socket);
      });

      socket.on('error', (err) => {
        reject(err);
      });

      socket.on('invoke', (data) => {
        const uri = url.parse(config.httpApiBaseUri);
        http.get({
          host: uri.hostname,
          port: uri.port,
          path: data.action,
        });
      });
    });
  },
  async stop() {
    socket.disconnect(true);
  },
};
