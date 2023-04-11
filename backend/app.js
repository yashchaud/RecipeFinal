const express = require("express");
const app = express();
const session = require("express-session"); //For Express Session
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
var logger = require("morgan");
var path = require("path");
var createError = require("http-errors");

const { signIn, welcome, refresh } = require("./handlers");

var indexRouter = require("./routes");
var usersRouter = require("./routes/users");
var searchRouter = require("./routes/search");

cors = require("cors");
const corsOptions = {
  origin: true,
  credentials: true,
};
app.options("*", cors(corsOptions));
// view engine setup

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/config.env" });
}

const sessionRoutes = require("./routes/sessionRoutes");
app.use("/api/session", sessionRoutes);
app.use("/index", indexRouter);
app.use("/users", usersRouter);
app.use("/search", searchRouter);
app.post("/signin", signIn);
app.get("/welcome", welcome);
app.post("/refresh", refresh);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

module.exports = app;
