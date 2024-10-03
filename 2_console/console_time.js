#!/usr/bin/env node
console.clear()

const loops = 1_000

console.time(`looping ${loops} times took`)
for (let index = 0; index < loops; index++) {
    Math.random()
}
console.timeEnd(`looping ${loops} times took`)
