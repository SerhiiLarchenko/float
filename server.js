//Simple server to test requests

const http = require("http");
const url = require("url");
const ecstatic = require("ecstatic");
const figlet = require("figlet");

const fileServer = ecstatic({root: "./"});

http.createServer((request, response) => {
    if (request.url == "/test") {
        console.log("test");
        let body = "", part = "";
        request.on("readable", ()=> {
            if (part = request.read()) body += part;
        }).on("end", () => {
            figlet.text(body,(error, data) => {
                console.log(data);
                if (error) console.error(error);
                else response.end(data);
            });
        });
    } else fileServer(request, response);
}).listen(3000);