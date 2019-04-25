# inline-css-cli

A simple CLI wrapper to inline css through stdin - stdout

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


