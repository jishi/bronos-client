const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function readOrCreateToken() {
  const tokenFilePath = path.join(__dirname, '../token.txt');
  try {
    const token = fs.readFileSync(tokenFilePath).toString();
    return token;
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }

    const token = crypto.randomBytes(16).toString('hex');
    fs.writeFileSync(tokenFilePath, token);
    return token;
  }
}

module.exports = {
  brokerEndpoint: process.env.BRONOS_BROKER_URL || 'https://broker.bronos.net',
  sonosApiBaseUri: process.env.BRONOS_SONOS_API_URL || 'http://localhost:5005',
  httpPort: process.env.BRONOS_HTTP_PORT || 5010,
  token: readOrCreateToken(),
};
