const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const loginRouter = require("./src/routes/loginroute");
const signupRouter = require("./src/routes/signuproute");
const homeRouter = require("./src/routes/homeroute");
const booksRouter = require("./src/routes/booksroute");
const editBooksRouter = require("./src/routes/editroute")
const singleBookRouter = require("./src/routes/singlebookroute")
require('dotenv').config();

const app = new express();
app.use(cors());

app.use(express.static('./dist/front-end'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));
app.use("/api/login", loginRouter);
app.use("/api/signup", signupRouter);
app.use("/", homeRouter);
app.use("/api/books", booksRouter);
app.use("/api/singlebook", singleBookRouter);
app.use("/api/editbook",editBooksRouter);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/front-end/index.html'));
 });

const PORT = (process.env.PORT || 5000);

app.listen(PORT, () => {
  console.log(`Server Ready on ${PORT}`);
});