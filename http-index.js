const inlineCss = require('inline-css')
const http = require('http')

http.createServer((request, response) => {
  let body = [];
  request.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    inlineCss(body, {url: "https://example.com/"}).then((html) => {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      response.end(html);
    });
  });
}).listen(8081);
