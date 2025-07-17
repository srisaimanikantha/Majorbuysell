const express = require("express");
const app = express();
const port = 3000;

const connectDB = require("./DB/db");
const authRoutes = require("./routes/auth.route.js");
const productRoutes = require("./routes/product.route.js");

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);


connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});