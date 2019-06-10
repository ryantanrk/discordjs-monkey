const Discord = require("discord.js");
var fs = require('fs');
var { prefix } = JSON.parse(fs.readFileSync('botconfig.json', 'utf8'));

module.exports.run = async(bot, message, args) => {
  if (!args.length)
    return message.channel.send("**USAGE:** " + `${prefix}math` + " <first number> <operand> <second number>" + "\n(Make sure to add spaces in between)");
  else {
    var operand = args[1];
    var num1 = parseFloat(args[0]);
    var num2 = parseFloat(args[2]);
    var result;
    switch (operand) {
      case "+": result = num1 + num2;
        message.channel.send("The result is " + `${num1 + num2}`);
        break;
      case "-": result = num1 - num2;
        message.channel.send("The result is " + `${result}`);
        break;
      case "*": result = num1 * num2;
        message.channel.send("The result is " + `${result}`);
        break;
      case "/": result = num1 / num2;
        message.channel.send("The result is " + `${result}`);
        break;
      default: message.channel.send("Invalid operand!");
        break;
    }
  }
};

module.exports.help = {
  name: "math"
};
