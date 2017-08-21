const http = require('http');
const url = require('url');
const io = require('socket.io-client');
const config = require('./config');

let socket;

module.exports = {
  async start() {
    return new Promise((resolve, reject) => {
      socket = io('http://localhost:8080/', {
        transports: ['websocket'],
      });

      socket.on('connect', () => {
        console.log('got connnected');
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
