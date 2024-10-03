#!/usr/bin/env node
require('progressbar')

const progress = require('progressbar').create().step('the task you are currently performing')
// use an array of steps that execute one second after each other
// as if we do them all instantly
// you won't see the progress bar as it will be instant
;[
    () => progress.setTotal(10),
    () => progress.addTick(),
    () => progress.addTick(),
    () => progress.addTick(),
    () => progress.setTotal(20),
    () => progress.setTick(7),
    () => progress.addTick(),
    () => progress.addTick(),
    () => progress.finish() // remove and destroy the progress bar
].forEach(function (step, index) {
    setTimeout(step, index * 300)
})
