const URL = require('url').URL;
const io = require('socket.io-client');
const fetch = require('node-fetch');
const config = require('./config');
const logger = require('./logger');
const httpServer = require('./http-server');

let socket;

module.exports = {
  async start() {
    await httpServer.start();
    const token = config.token;
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
          const uri = new URL(config.sonosApiBaseUri);
          uri.pathname = data.action;
          const res = await fetch(uri.toString());
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
    await httpServer.stop();
    socket.disconnect(true);
  },
};
