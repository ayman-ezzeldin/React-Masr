const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoute);





mongoose.connect('mongodb+srv://aymanmae12:mWuxalhboY7zZuFp@cluster0.rdb3v9j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
  console.log('connected to database')
})
.catch(error => {
  console.log('here is the error',error)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
  console.log(`http://localhost:${port}`);
})