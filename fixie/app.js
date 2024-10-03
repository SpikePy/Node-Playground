#!/usr/bin/env node
const fixie = require('./data.js')

console.clear()
console.log("Bike:", fixie.name)
console.log()

let weight_total_original = 0
let weight_total_upgrade = 0
let price_upgrade = 0

Array.from(fixie.components).forEach(component => {
    if (typeof(component.price) === 'number' && component.price > 0) {
        price_upgrade += component.price
        weight_total_original += component.weight_original_g
        weight_total_upgrade += component.weight_upgrade_g

        console.log(component.name);
        console.log("Before:", component.weight_original_g, "g");
        console.log("After:", component.weight_upgrade_g, "g");
        console.log("Diff:", component.weight_original_g - component.weight_upgrade_g, "g")
        console.log("Price:", component.price, "€");
        console.log("Weight/Money:", Math.round((component.weight_original_g - component.weight_upgrade_g) / component.price), "g/€")
        console.log()
}
})

console.log("--------------------------------------------------------------------------------");
console.log("Total Additional Price:".padEnd(25), Math.round(price_upgrade,2).toString().padStart(10), "€");
console.log("Total Weight Original:".padEnd(25), weight_total_original.toString().padStart(10), "g");
console.log("Total Weight Upgrade:".padEnd(25), weight_total_upgrade.toString().padStart(10), "g");
console.log("Total Weight Diff:".padEnd(25), (weight_total_original - weight_total_upgrade).toString().padStart(10), "g");
console.log("Total Weight/Money:".padEnd(25), (Math.round((weight_total_original - weight_total_upgrade) / price_upgrade)).toString().padStart(10), "g/€");
