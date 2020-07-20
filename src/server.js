import http from 'http';

export default () => {
  http.createServer((_, res) => {
    res.end(i18n.t('welcome'));
  }).listen(8080);
};
