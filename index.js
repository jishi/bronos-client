const app = require('./lib/app');

app.start();

process.on('SIGINT', async () => {
  await app.stop();
})