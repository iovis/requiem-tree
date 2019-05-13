# require-tree

Recursively require all the files in a given folder.

## Installation

Install via npm or yarn:

```
npm install require-tree
```

## Usage

Do your own REPL console to play around with your code:

```js
#!/usr/bin/env node

const requireTree = require('./require-tree');
const repl = require('repl');
const replServer = repl.start();
const context = replServer.context;

// Adding stuff
context.db = requireTree('db');
context.services = requireTree('services');
context.controllers = requireTree('controllers');
context.queries = requireTree('queries');
```
