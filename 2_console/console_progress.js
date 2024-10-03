#!/usr/bin/env node
console.clear()

console.log('Show progress bar:');

import ProgressBar from 'progress'
const bar = new ProgressBar(':bar', {total: 30})
const timer = setInterval(() => {
    bar.tick()
    if (bar.complete){
        clearInterval(timer)
    }
}, 100)
