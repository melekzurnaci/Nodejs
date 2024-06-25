const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const port = 3000;

app.use("/", (req, res, next) => {
  console.log("always run");
  next();
});

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
