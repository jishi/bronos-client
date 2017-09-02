const expect = require('chai').expect;
const sinon = require('sinon');
const io = require('socket.io');
const app = require('../../lib/app');
const http = require('http');
const config = require('../../lib/config');
require('chai').use(require('sinon-chai'));

describe('when we have a web socket server', () => {
  let wsServer;
  let httpServer;
  let connectSpy;
  let socket;

  before(() => {
    wsServer = io(8080, {
      transports: ['websocket'],
    });
  });

  before(() => {
    httpServer = http.createServer((req, res) => {
      res.end('{ "status": "success" }');
    });
    httpServer.listen(8081);
  });

  before(() => {
    config.httpApiBaseUri = 'http://localhost:8081';
    config.brokerEndpoint = 'http://localhost:8080';
  });

  beforeEach(() => {
    connectSpy = sinon.spy((_socket) => {
      socket = _socket;
    });
    wsServer.on('connect', connectSpy);
  });

  afterEach(() => {
    wsServer.removeAllListeners('connect');
  });

  after(() => wsServer.close());

  describe('when we start the client', () => {
    beforeEach(() => app.start());
    afterEach(() => app.stop());

    it('should connect to server', async () => {
      expect(connectSpy).to.be.calledOnce;
    });

    describe('when server sends an action', () => {
      it.only('should invoke action against configured endpoint', (done) => {
        httpServer.on('request', (req, res) => {
          expect(req.url).to.equal('/foo/bar');
          res.end();
        });

        socket.emit('invoke', {
          action: '/foo/bar',
        }, (ack) => {
          expect(ack).to.eql({ status: 'success' });
          done();
        });
      });
    });
  });
});
