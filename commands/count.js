const Discord = require("discord.js");
var fs = require("fs");
var { count } = JSON.parse(fs.readFileSync('database.json', 'utf8'));

module.exports.run = async(bot, message, args) => {
  count++
  return message.channel.send("This command has been done " + count + " time(s)");
};

module.exports.help = {
  name: "count"
};
