import http from 'http';

export default async () => {
  http.createServer((req, res) => {
    res.end(t('welcome'));
  }).listen(8080);
};
