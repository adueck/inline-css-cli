# inline-css-cli

A simple CLI wrapper for [inline-css](https://www.npmjs.com/package/inline-css). For inlining html through stdin - stdout.

This is useful if you want to inline files from the command line, or use it programattically in non-JS environments.

### Installation

```
git clone https://github.com/adueck/inline-css-cli
cd inline-css-cli
npm install
npm link
```

### Usage

```
$ echo "<html><style>p { color: red; }</style><body><p>Hello World</p></body></html>" | inline-css
```

output (to stdout)

```
<html><body><p style="color: red;">Hello World</p></body></html>
```

### Bonus:

You can also run 

```
node http-index.js
```

To get a http server that will inline the html you send in a http request body.

```
curl -d "<html><body><p style='color: red;'>Hello World</p></body></html>" -X POST http://localhost.8081/
```

Response:
```
<html><body><p style="color: red;">Hello World</p></body></html>
```
