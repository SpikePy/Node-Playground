#!/usr/bin/env node
console.clear()

console.log("Use built-in function only")
console.log("===============================================================================")
const argv = process.argv.slice(2)
console.log(`path_node=${process.argv[0]}`)
console.log(`path_script=${process.argv[1]}`)
console.table(argv)
console.log()

console.log("Parse arguemnts by additional package")
const args = require('minimist')(argv)
console.log("===============================================================================")
console.table(args)
console.log()
