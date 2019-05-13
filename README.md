# req

Recursively require all the files in a given folder.

## Installation

Install via npm or yarn:

```
npm install req
```

## Usage

Do your own REPL console to play around with your code:

```js
#!/usr/bin/env node

const req = require('req');
const repl = require('repl');
const replServer = repl.start();
const context = replServer.context;

// Adding stuff
context.db = req('db');
context.services = req('services');
context.controllers = req('controllers');
context.queries = req('queries');
```
