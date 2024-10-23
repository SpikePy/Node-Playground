const fs = require('fs')

console.clear()

const dir = 'foo'
const file = 'bar.txt'
const content = `This is the content written of the file!`


fs.mkdir(`${dir}`, { recursive: true }, (err) => {
    if (err) throw err
    fs.writeFile(`${dir}/${file}`, content, 'utf8', (error) => {
        if (error) {
            console.error('An error occurred while writing to the file:', error)
            return
        }
        console.log('File has been written successfully.\n')
        fs.readFile(`${dir}/${file}`, 'utf8', (err, data) => {
            if (err) {
              console.error(err)
              return
            }
            fs.stat(`${dir}/${file}`, (err, stats) => {
                if (err) {
                    console.error(err)
                    return
                }
                console.log(stats, '\n');
                console.log(`Content of "${dir}/${file}"`)
                console.log('╔' + '═'.repeat(content.length) + '╗')
                console.log('║' + data                       + '║')
                console.log('╚' + '═'.repeat(content.length) + '╝')
            })
        })
    })
})
