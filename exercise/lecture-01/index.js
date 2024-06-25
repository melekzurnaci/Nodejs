const http = require("http");

const server = http.createServer();

const products = [
  { name: "apple" },
  { name: "orange" },
  { name: "watermelon" },
];

function parse(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      if (body.includes("productName=")) {
        resolve({ name: body.replace("productName=", "") }); // exp: { name: "apple" }
      } else {
        reject("Invalid data");
      }
    });
  });
}

server.prependListener("request", (req, res) => {
  console.log(`Incoming ${req.method} request for ${req.url}`);
  req.message = "Message from Middleware";
  req.error = "Error comming from the Middleware";
});

server.on("request", (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    // if you replace to line 41 with 39 you can see the statusCode 400  end I hope  you'll understand middleware.
    //  <input type= "text" name= "productName00" />
    res.end(`
      <form action= "/products" method="POST"  >
        <input type= "text" name= "productName" /> 
        <button type="submit"> Post </button>
      </form>
    `);
  } else if (req.url === "/products") {
    if (req.method === "POST") {
      parse(req)
        .then((product) => {
          products.push(product);

          res.end(`product created..\n 
        ${JSON.stringify(products)}`);
        })
        .catch((err) => {
          res.statusCode = 400;
          res.end(err);
        });
    } else if (req.method === "GET") {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(`${JSON.stringify(products)}`);
    } else {
      res.setHeader("Content-Type", "text/plain");
      res.statusCode = 405;
      res.end("Method not allowed");
    }
  } else {
    res.setHeader("Context-Type", "application/json");
    res.statusCode = 404;
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("server is up and running on port 3000");
});
