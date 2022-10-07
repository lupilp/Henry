var fs = require("fs");
var http = require("http");

// Escribí acá tu servidor

http
  .createServer(function (req, res) {
    if (req.url === "/arcoiris") {
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      let arcoiris = fs.readFileSync("./images/arcoiris_doge.jpg");
      res.end(arcoiris);
    }

    if (req.url === "/badboy") {
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      let badboy = fs.readFileSync("./images/badboy_doge.jpg");
      res.end(badboy);
    }

    if (req.url === "/code") {
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      let code = fs.readFileSync("./images/code_doge.jpg");
      res.end(code);
    }

    if (req.url === "/resaca") {
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      let resaca = fs.readFileSync("./images/resaca_doge.jpg");
      res.end(resaca);
    }

    if (req.url === "/retrato") {
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      let retrato = fs.readFileSync("./images/retrato_doge.jpg");
      res.end(retrato);
    }

    if (req.url === "/sexy") {
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      let sexy = fs.readFileSync("./images/sexy_doge.jpg");
      res.end(sexy);
    } else {
      res.writeHead(404);
      res.end("No no, nada que ver");
    }
  })
  .listen(3001, "localhost", function () {
    console.log("ta corriendo");
  });
