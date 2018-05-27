const myLogger = require('../dist/simple-logger-util');

myLogger.success('I\'m success message.');
myLogger.error('I\'m error message.');
myLogger.warn('I\'m warn message.');
myLogger.info('I\'m info message.');
console.log();
myLogger.success('I\'m success message with bold style.', { style: 'bold' });
myLogger.error('I\'m error message with bold style.', { style: 'bold' });
myLogger.warn('I\'m warn message with bold style.', { style: 'bold' });
myLogger.info('I\'m info message with bold style.', { style: 'bold' });
