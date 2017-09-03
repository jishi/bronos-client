const app = require('./lib/app');
const logger = require('./lib/logger');

app.start()
  .catch((err) => {
    logger.error('Error starting up', err);
    process.exit(1);
  });

process.on('SIGINT', async () => {
  await app.stop();
});