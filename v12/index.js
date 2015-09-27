var
 http = require("http"),
 port = 8080
;

http
.createServer(function (req, res) {
    res.end("Hello");
})
.listen(port)
.on("listening", function () {
    console.log("Listening on port %s", port);
})
;
