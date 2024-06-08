import http from 'http';
import fs from 'node:fs/promises';

async function sendHTML(res, path) {
  const html = await fs.readFile(path);
  res.end(html);
}

const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'text/html');

  switch (req.url) {
    case '/':
      sendHTML(res, './pages/index.html');
      break;
    case '/about':
      sendHTML(res, './pages/about.html');
      break;
    case '/contact':
      sendHTML(res, './pages/contact-me.html');
      break;
    default:
      sendHTML(res, './pages/404.html');
      break;
  }
});

server.listen(8080, 'localhost', () => {
  console.log('listening on localhost:8080...');
});
