const express = require("express");
const app = express();
const PORT = 5000;
const path = require("path");
const exphbs = require("express-handlebars");
app.use(express.static(path.join(__dirname, "public")));

app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
  })
);
app.set("view engine", "hbs");
app.get("/", (req, res) => {
  res.render("index");
});
app.listen(PORT, () => {
  console.log(`Server ${PORT} portda ishladi`);
});
