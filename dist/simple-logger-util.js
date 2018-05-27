'use strict';

const chalk = require('chalk');
const { Signale } = require('signale');

const options = {
  stream: process.stdout,
  types: {
    success: {
      badge: '✔',
      color: 'green',
      label: 'done'
    },
    error: {
      badge: '✖',
      color: 'red',
      label: 'fail'
    },
    info: {
      badge: 'ℹ',
      color: 'cyan',
      label: 'info'
    },
    warn: {
      badge: 'ℹ',
      color: 'yellow',
      label: 'warn'
    },
  },
};

const logger = new Signale(options);

function _log (msg, label) {
  console.log(label, '     ', msg);
  console.log();
}

var index = {
  success(msg, { style = 'normal' } = {}) {
    if (style === 'bold') {
      _log(msg, chalk.reset.inverse.bold.green(' DONE '));
    } else {
      logger.success(msg);
      console.log();
    }
  },
  error(msg, { style = 'normal' } = {}) {
    if (style === 'bold') {
      _log(msg, chalk.reset.inverse.bold.red(' FAIL '));
    } else {
      logger.error(msg);
      console.log();
    }
  },
  warn(msg, { style = 'normal' } = {}) {
    if (style === 'bold') {
      _log(msg, chalk.reset.inverse.bold.yellow(' WARN '));
    } else {
      logger.warn(msg);
      console.log();
    }
  },
  info(msg, { style = 'normal' } = {}) {
    if (style === 'bold') {
      _log(msg, chalk.reset.inverse.bold.blue(' INFO '));
    } else {
      logger.info(msg);
      console.log();
    }
  },
}

module.exports = index;
