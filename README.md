# re-quire

Recursively require all the files in a given folder.

## Installation

Install via npm or yarn:

```
npm install re-quire
```

## Usage

Do your own REPL console to play around with your code:

```js
#!/usr/bin/env node

const reQuire = require('./re-quire');
const repl = require('repl');
const replServer = repl.start();
const context = replServer.context;

// Adding stuff
context.db = reQuire('db');
context.services = reQuire('services');
context.controllers = reQuire('controllers');
context.queries = reQuire('queries');
```
