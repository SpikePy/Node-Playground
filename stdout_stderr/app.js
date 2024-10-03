#!/usr/bin/env node
console.clear()

console.log('\x1b[32;1m%s\x1b[0m', 'Hi')

// Print to stderr and use low-level styling
console.error('\x1b[31;1m%s\x1b[0m', 'ERROR (Test)')

// const stacktrace = () => console.trace()
// stacktrace()
