const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  return message.channel.send(message.author.avatarURL);
};

module.exports.help = {
  name: "avatar"
};
