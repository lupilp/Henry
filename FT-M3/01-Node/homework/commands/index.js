var fs = require("fs");
var request = require("request");

module.exports = {
  pwd: function () {
    process.stdout.write(process.cwd());
  },
  date: function () {
    process.stdout.write(Date());
  },

  ls: function () {
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write("prompt > ");
    });
  },

  echo: function (argum) {
    process.stdout.write(argum.join(" "));
  },

  cat: function (file) {
    fs.readFile(file[0], "utf8", function (err, data) {
      if (err) throw err;
      const lineas = data.split("\n").join("\n");
      process.stdout.write(lineas);
      process.stdout.write("prompt > ");
    });
  },

  head: function (file) {
    fs.readFile(file[0], "utf8", function (err, data) {
      if (err) throw err;
      const lineas = data.split("\n").slice(0, 9).join("\n");
      process.stdout.write(lineas);
      process.stdout.write("prompt > ");
    });
  },

  tail: function (file) {
    fs.readFile(file[0], "utf8", function (err, data) {
      if (err) throw err;
      const lineas = data.split("\n").slice(-10).join("\n");
      process.stdout.write(lineas);
      process.stdout.write("prompt > ");
    });
  },

  curl: function (url) {
    request(url[0], function (err, response, body) {
      if (err) throw err;
      process.stdout.write(body);
      process.stdout.write("prompt > ");
    });
  },
};
