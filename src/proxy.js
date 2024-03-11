const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/db.json',
    createProxyMiddleware({
      target: 'https://tiana-droid.github.io/sj-api.github.io',
      changeOrigin: true,
    })
  );
};
