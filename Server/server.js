const http = require("http")

let port = 12345

http.createServer((req, res) => {
    console.log("Received a request");
    req.on("data", data => {
        console.log("New data:\n" + data);
        data.text()
    })



    res.end()
}).listen(port)