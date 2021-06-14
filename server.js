const express = require("express");
const app = express();
const path = require("path");
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));
const fs = require("fs");
const { title } = require("process");
const mongoose = require("mongoose");
require("dotenv").config();

const productSchema = mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
});

const product = mongoose.model("product", productSchema);

// function readProducts(callback) {
//   fs.readFile("products.json", "utf8", (err, resFile) => {
//     const products = JSON.parse(resFile);
//     callback(products);
//   });
// }

app.get("/api/", (req, res) => {
  res.send("hi");
});

app.get("/api/products", function (req, res) {
  let productsFiltered = [];
  const { id, title, category, min = 0, max = 1000000 } = req.query;
  console.log(max.body);
  if (id) {
    product.findById(id, function (err, products) {
      if (err) {
        console.log("error find by id", err);
      } else {
        res.send(products);
        console.log("find by id success");
      }
    });
  } else {
    product
      .find({ price: { $lte: max }, price: { $gte: min } })
      .exec()
      .then((products) => {
        console.log("max", JSON.parse(max), products);
        if (category) {
          const categoryJSON = JSON.parse(category);
          productsFiltered.push(
            products.filter(
              (product) =>
                product.category.includes(categoryJSON) &&
                !productsFiltered.find(
                  (productFiltered) => productFiltered.id === product.id
                )
            )
          );
        }
        if (title) {
          const titleJSON = JSON.parse(title);
          productsFiltered.push(
            products.filter((product) => {
              product.title.indexOf(title) != -1 &&
                !productsFiltered.find(
                  (productFiltered) => productFiltered.id === product.id
                );
            })
          );
        }
        // const productsFiltered = [];
        // console.log(productsFiltered);
        res.send(productsFiltered.length ? productsFiltered : products);
      });
    // res.send("try");

    //   product
    //     .find({})
    //     .exec()
    //     .then((products) => {
    //       let productsFiltered = [];
    //       if (slider) {
    //         productsFiltered.push(
    //           products.filter(
    //             (product) =>
    //               product.price >= slider[0] && product.price <= slider[1]
    //           )
    //         );
    //       }
    //       if (category) {
    //         productsFiltered.push(
    //           products.filter((category) => product.category.includes(category))
    //         );
    //       }
    //       if (title) {
    //         productsFiltered += products.filter((product) => {
    //           console.log(
    //             "product",
    //             product,
    //             "pf",
    //             productsFiltered,
    //             "title",
    //             title
    //           );
    //           return product.title.includes(title);
    //         });
    //       }
    //       console.log(productsFiltered);
    //       res.send(productsFiltered.length ? productsFiltered : products);
    //     });
  }
});

app.get("/api/products/:id", (req, res) => {
  console.log(req.params.id);
  product
    .find({})
    .exec()
    .then((products) => {
      const product = products.find((product) => product.id === req.params.id);
      if (product) {
        res.send(product);
      } else {
        res.status(404);
        res.send();
      }
    });
});

app.post("/api/products", (req, res) => {
  const [title, price, description, category, image] = [
    req.body.title,
    +req.body.price,
    req.body.description,
    req.body.category,
    req.body.image,
  ];
  product
    .insertMany({
      title: title,
      price: price,
      description: description,
      category: category,
      image: image,
    })
    .then((products) => {
      console.log("add success");
    });
});
app.put("/api/products/:id", (req, res) => {
  const { title, description, category, image } = req.params;

  product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    function (err, product) {
      if (err) {
        console.log("update error", err);
      } else {
        console.log("update success!");
      }
    }
  );
});

app.delete("/api/products/:id", (req, res) => {
  product.findByIdAndRemove(req.params.id, function (err, product) {
    if (err) {
      console.log("remove error", err);
    } else {
      console.log("remove success");
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_LINK}`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("running");

    // const port = process.env.PORT;
    // console.log(port);
    app.listen(server.env.PORT);
  });
