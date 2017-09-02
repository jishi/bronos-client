module.exports = {
  brokerEndpoint: process.env.BRONOS_BROKER_URL || 'https://broker.bronos.net',
  httpApiBaseUri: process.env.BRONOS_SONOS_API_URL || 'http://localhost:5005',
};