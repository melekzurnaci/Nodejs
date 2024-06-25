const fs = require("fs");

const path = require("path");

const productDbPath = path.join(__dirname, "../db/product.json");
module.exports = class Product {
  constructor(name, price) {
    (this.name = name), (this.price = price);
  }

  async save() {
    fs.readFile(productDbPath, "utf8", (err, data) => {
      if (err) {
        console.log(`readfile: ${err}`);
        return;
      }
      const productData = JSON.parse(data);

      productData.push({
        id: productData.length + 1,
        name: this.name,
        price: this.price,
      });

      fs.writeFile(
        productDbPath,
        JSON.stringify(productData),
        "utf8",
        (err) => {
          if (err) {
            console.log(err);
            return;
          }

          console.log("Data appendend successfully");
        }
      );
    });
  }

  static findAll() {
    const data = fs.readFileSync(productDbPath, "utf8");

    return JSON.parse(data);
  }
};
