#!/usr/bin/env node
console.clear()

function function2(){
    console.log('function2')
    console.trace()
}

function function1(){
    console.log('function1')
    function2()
}

function1()
