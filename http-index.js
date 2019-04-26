const inlineCss = require('inline-css');
const http = require('http');
const options = {
	url: " ",
	preserveMediaQueries: true,
	applyTableAttributes: true,
};

http.createServer((request, response) => {
  let body = [];
  request.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    inlineCss(body, options).then((html) => {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      response.end(html);
    });
  });
}).listen(8081, () => {
  console.log("server ready on http://localhost:8081");
  console.log("POST html for inlining in the request body");
});
