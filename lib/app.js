const URL = require('url').URL;
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const io = require('socket.io-client');
const fetch = require('node-fetch');
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
    logger.info(`Token is ${token}, now connecting to ${config.brokerEndpoint}`);
    return new Promise((resolve, reject) => {
      socket = io(config.brokerEndpoint, {
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

      socket.on('invoke', async (data, cb) => {
        let responsePayload;
        try {
          const uri = new URL(config.httpApiBaseUri);
          uri.pathname = data.action;
          const x = uri.toString();
          const res = await fetch(x);
          responsePayload = await res.json();
        } catch (err) {
          responsePayload = {
            status: 'error',
            message: err.message,
            stack: err.stack,
          };
        }

        cb(responsePayload);
      });
    });
  },
  async stop() {
    socket.disconnect(true);
  },
};
