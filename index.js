#!/usr/bin/env node

var inlineCss = require('inline-css');
var getStdin = require('get-stdin');

getStdin().then(stdin => {
	inlineCss(stdin, { url: ' ' }).then(console.log);
});

