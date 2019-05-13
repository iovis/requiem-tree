# requiem-tree

Recursively require all the files in a given folder.

## Installation

Install via npm or yarn:

```
npm install requiem-tree
```

## Usage

Do your own REPL console to play around with your code:

```js
#!/usr/bin/env node

const requiem = require('requiem-tree');
const repl = require('repl');
const replServer = repl.start();
const context = replServer.context;

// Adding stuff
context.db = requiem('db');
context.services = requiem('services');
context.controllers = requiem('controllers');
context.queries = requiem('queries');
```
