const expect = require('chai').expect;
const URL = require('url').URL;
const fetch = require('node-fetch');
const config = require('../../lib/config');
const server = require('../../lib/http-server');

require('chai').use(require('sinon-chai'));

describe('test/acceptance/http-server.js', () => {

  describe('when starting server', () => {

    before(() => server.start());
    after(() => server.stop());

    it('should respond to requests on configured port', async () => {
      const url = new URL('http://localhost');
      url.port = config.httpPort;
      const res = await fetch(url.toString());
      expect(res.status).to.equal(200);
    });

    it('should return token on /token', async () => {
      const url = new URL('http://localhost/token');
      url.port = config.httpPort;
      const res = await fetch(url.toString());
      expect(res.status).to.equal(200);
      const token = await res.text();
      expect(token).to.equal(config.token);
    });

  });

});
