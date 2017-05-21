const path = require("path"),
    express = require("express");

const DIST_DIR = path.join(__dirname, "build"),
// const DIST_DIR = path.join(__dirname, "."),
//     PORT = 3000,
    PORT = 8080,
    app = express();

//Serving the files on the dist folder
app.use( express.static(DIST_DIR) );

//Send index.html when the user access the web
app.get("/", function (req, res) {
    res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, function () {
    console.log("Server is up on port " + PORT);
});
