#!/usr/bin/env node

var inlineCss = require('inline-css');
var getStdin = require('get-stdin');

getStdin().then(stdin => {
	inlineCss(stdin, { url: 'https://example.com' }).then(console.log);
});

