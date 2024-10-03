#!/usr/bin/env node
console.clear()

for (let index = 0; index < 10_000; index++) {
    console.count('Loop')
    console.count(Math.floor(Math.random()*10))
    console.log()
}
