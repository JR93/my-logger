<h1 align="center">
  simple-logger-util
</h1>

## Description

this is a simple logger tool which is easy to use in node program.

## Install

```
npm install simple-logger-util
```

## Usage

```
const myLogger = require('simple-logger-util');
myLogger.success('I\'m success message.');
myLogger.error('I\'m error message.');
myLogger.warn('I\'m warn message.');
myLogger.info('I\'m info message.');
console.log();
myLogger.success('I\'m success message with bold style.', { style: 'bold' });
myLogger.error('I\'m error message with bold style.', { style: 'bold' });
myLogger.warn('I\'m warn message with bold style.', { style: 'bold' });
myLogger.info('I\'m info message with bold style.', { style: 'bold' });
```
