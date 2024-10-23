const http = require('http')
const os = require('os');
const fs = require('fs');
const cowsay = require("cowsay");

const color_reset = '\x1b[0m'
const color_bold = '\x1b[1m'

const say = cowsay.say({
    text: `This server runs on ${os.type()} ${os.release()} since ${Math.floor(os.uptime()/60/60/24)} days.`
})

http.createServer((req, res) => {
    console.log(`${new Date().toISOString()}: Request to ${req.url} from ${color_bold}${req.socket.remoteAddress}${color_reset} via ${color_bold}${req.headers['user-agent']}${color_reset}`);
    res.writeHead(200, { "Content-Type": "text/plain" })

    if (req.url === "/status" || req.url === "/info") {
        res.write(say)
    }
    else {
        res.write('Hello World!')
    }

    res.end()
}).listen(8000, () => {
    console.log(`App is running on port 8000`);
});
