#!/usr/bin/env node

const inlineCss = require('inline-css');
const getStdin = require('get-stdin');
const options = {
	url: " ",
	preserveMediaQueries: true,
	applyTableAttributes: true,
};

getStdin().then(stdin => {
	inlineCss(stdin, options).then(console.log);
});

