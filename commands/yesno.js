const Discord = require("discord.js");
var decision = ["yes", "no", "maybe"];

var fs = require('fs');
var { prefix } = JSON.parse(fs.readFileSync('botconfig.json', 'utf8'));

module.exports.run = async(bot, message, args) => {
  var args = message.content.slice(prefix.length).split(" ");
  var saymessage = args.slice(1).join(" ");
  
  if (!args.length)
  return message.channel.send("**USAGE:** " + `${prefix}yesno` + " <arguments>");
  else {
  let yesno = new Discord.RichEmbed()
  .setDescription(saymessage)
  .setColor("#795138")
  .addField("The monkey says: ", decision[Math.floor(Math.random()*decision.length)]);
  
  return message.channel.send(yesno);
  }
};

module.exports.help = {
  name: "yesno"
};
