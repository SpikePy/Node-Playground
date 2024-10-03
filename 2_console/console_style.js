#!/usr/bin/env node

console.clear()

const color_reset = '\x1b[0m'
const color_bold = '\x1b[1m'
const color_yellow = '\x1b[33m'
const color_red = '\x1b[31m'
console.log(`LOW-LEVEL:  Hi ${color_yellow}Hello${color_reset} ${color_red}${color_bold}World${color_reset}!`);

import chalk from 'chalk';
console.log(`HIGH-LEVEL: Hi, ${chalk.bgCyan('and')} ${chalk.green('hello')} ${chalk.blue('World')}${chalk.bold.red('!')}`)
