const express = require("express");
const app = express();
const router = require("./routes")
const path = require("path");

// set up views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// set up static files path
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// dummy route
app.use("/", router)

// run server
const port = 3000;
const host = "127.0.0.1";
app.listen(port, host, () => console.log(`Running @ http://${host}:${port}`));