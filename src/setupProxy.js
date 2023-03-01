const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
module.exports = function(app) {
  app.use('/api', cors(), createProxyMiddleware({
    target: 'https://api.unicheck.com',
    changeOrigin: true,
  }));
};
