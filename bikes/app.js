#!/usr/bin/env node
const bikes = require('./data.js')

console.clear()
console.log(bikes)

let bike

bike = 'player'
console.log(`Total Price of ${bikes[bike].name}: ${Math.round((bikes[bike].price / 1.27 * 1.19 + 52)*100)/100}`)

bike = 'pilot'
console.log(`Total Price of ${bikes[bike].name}: ${Math.round((bikes[bike].price / 1.27 * 1.19 + 52)*100)/100}`)
