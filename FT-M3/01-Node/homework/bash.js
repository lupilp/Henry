const commands = require("./commands");
// const commands = require("./commands/index.js");

// const cmd = "pwd";
// Output un prompt
process.stdout.write("prompt > ");
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on("data", function (data) {
  var argum = data.toString().trim().split(" ");
  var cmd = argum.shift();
  if (commands.hasOwnProperty(cmd)) {
    commands[cmd](argum);
  }

  process.stdout.write("\nprompt > ");
});
