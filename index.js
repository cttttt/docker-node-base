var
 express = require("express"),
 port = 8080
;

express()
.use(function (req, res) {
    res.send("Hello");
})
.listen(port)
.on("listening", function () {
    console.log("Listening on port %s", port);
})
;
