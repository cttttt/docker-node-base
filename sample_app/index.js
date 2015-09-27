var
 express = require("express"),
 port = 8080
;

express
.use(function (req, res, next) {
    console.log("%s", req.path);
    next();
})
.use(function (req, res) {
    res.end("Serious work has been performed.");
})
.listen(port, function () {
    console.log("Listening on port %s", port);
})
;
