//Initialisation
const path = require("path"),
    express = require("express"),
    app = express();

//Initialize port
app.set("port", 8080);

//Initialize folder
app.set('views', path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

//Initialize ejs
app.set("view engine", "ejs");

//Opening ejs view page 'Index.ejs'
app.get("/", (req, res) => {
    res.render("index");
});

//Listen to the port
app.listen(app.get("port"), function () {
    console.log("Server started on http://localhost:" + app.get("port"));
});