#!/usr/bin/env node

import dotenv from 'dotenv'
dotenv.config()

console.log("Print Environment Variables");
console.log("===========================");
console.log(`env_file=${process.env.env_file}`)
console.log(`HOME=${process.env.HOME}`)
