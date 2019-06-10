const Discord = require("discord.js");
var fs = require('fs');
var { prefix } = JSON.parse(fs.readFileSync('botconfig.json', 'utf8'));

module.exports.run = async(bot, message, args) => {
  var args = message.content.slice(prefix.length).split(" ");
  var saymessage = args.slice(1).join(" ");
  
  if (!args.length)
    return message.channel.send("**USAGE:** " + `${prefix}say` + " <arguments>");
  else
    return message.channel.send(saymessage);
};

module.exports.help = {
  name: "say"
};
